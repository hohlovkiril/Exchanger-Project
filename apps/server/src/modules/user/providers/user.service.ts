import {
  Injectable,
  Logger,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as readline from 'node:readline';
import { hashPassword, Role } from 'src/common';
import { UserCreateDto, UserGetManyDto, UserUpdateDto } from 'src/dto';
import { UserEntity } from 'src/entities';
import { Repository, SelectQueryBuilder, Not, } from 'typeorm';

@Injectable()
export class UserService {

  private readonly logger: Logger = new Logger(UserService.name);

  private rl: readline.Interface;

  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  private async createBuilder(): Promise<SelectQueryBuilder<UserEntity>> {
    return await this.repository.createQueryBuilder('user')
      .leftJoinAndSelect('user.avatar', 'avatar')
  }

  private ask(query: string): Promise<string> {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((res, rej) => {
      this.rl.question(query, (answer) => {
        if (answer.length === 0) res(' ');
        else res(answer.replaceAll('"', '').replaceAll("'", ''));
        this.rl.close();
      })
    })
  }

  public async createSuperUser() {
    const checkExistRoot = await this.repository.findOneBy({ role: Role.Root });

    if (checkExistRoot !== null) {
      return this.logger.warn('Super User already exists, before create new super user remove old!');
    }

    const newSuperUser: any = {
      firstName: '',
      lastName: '',
      phone: '',
      role: Role.Root,
    };

    const username = await this.ask('Usernmae: ');
    const email = await this.ask('Email address: ');
    const password = await this.ask('Password: ');

    try {
      await this.create({
        ...newSuperUser, 
        username: username.trim(),
        email: email.trim(),
        password: password.trim(),
      })

      this.logger.log('New super user created successfully!');
    } catch (err) {
      this.logger.error(`Failed create super user: ${err.message}`);
    }
  }

  public async removeSuperUser(): Promise<void> {
    const user = await this.repository.findOneBy({ role: Role.Root });

    if (user) {
      await this.repository.remove(user);
    }

    this.logger.debug('Super User successfully removed!');
  }

  public async findOneByIdOrNull(id: number): Promise<UserEntity | null> {
    const query = await this.createBuilder();

    query.where('user.id = :id', { id });

    return await query.getOne();
  }

  public async findOneByIdOrFailed(id: number): Promise<UserEntity> {
    const user = await this.findOneByIdOrNull(id);

    if (!user) {
      throw new NotFoundException(`User with id: ${id} not found!`);
    }

    return user;
  }

  public async findOneByUsernameOrNull(username: string): Promise<UserEntity | null> {
    const query = await this.createBuilder();

    query.where('user.username = :username', { username });

    return await query.getOne();
  }

  public async findOneByUsernameOrFailed(username: string): Promise<UserEntity> {
    const user = await this.findOneByUsernameOrNull(username);

    if (!user) {
      throw new NotFoundException(`User with username: ${username} not found!`);
    }

    return user;
  }

  public async findOneByEmailOrNull(email: string): Promise<UserEntity | null> {
    const query = await this.createBuilder();

    query.where('user.email = :email', { email });

    return await query.getOne();
  }

  public async findOneByEmailOrFailed(email: string): Promise<UserEntity> {
    const user = await this.findOneByEmailOrNull(email);

    if (!user) {
      throw new NotFoundException(`User with email: ${email} not found!`);
    }

    return user;
  }

  public async findOneByPhoneOrNull(phone: string): Promise<UserEntity | null> {
    const query = await this.createBuilder();

    query.where('user.phone = :phone', { phone });

    return await query.getOne();
  }

  public async findOneByPhoneOrFailed(phome: string): Promise<UserEntity> {
    const user = await this.findOneByPhoneOrNull(phome);

    if (!user) {
      throw new NotFoundException(`User with phome: ${phome} not found!`);
    }

    return user;
  }

  public async findMany(payload: UserGetManyDto): Promise<UserEntity[]> {
    const query = await this.createBuilder();

    query.where('1 = 1')
      // .andWhere('user.role != :role', { role: Role.Root });

    query.orderBy('user.id', 'DESC');

    return await query.getMany();
  }

  public async create(payload: UserCreateDto): Promise<UserEntity> {
    const checkoutUsername = await this.repository.findOneBy({ username: payload.username });
    const checkoutEmail = await this.repository.findOneBy({ email: payload.email });
    const checkoutPhone = await this.repository.findOneBy({ phone: payload.phone });

    if (checkoutUsername) {
      throw new BadRequestException(`User with username: ${payload.username} already exists!`);
    }

    if (checkoutEmail) {
      throw new BadRequestException(`User with email: ${payload.email} already exists!`);
    }

    if (checkoutPhone) {
      throw new BadRequestException(`User with phone: ${payload.phone} already exists!`);
    }

    if (payload.role === Role.Root) {
      const checkExistRoot = await this.repository.findOneBy({ role: Role.Root });

      if (checkExistRoot) {
        throw new BadRequestException('Super User Root already exists!');
      }
    }

    const newUser = await this.repository.create();
    newUser.firstName = payload.firstName;
    newUser.lastName = payload.lastName;
    newUser.username = payload.username;
    newUser.email = payload.email;
    newUser.phone = payload.phone;
    newUser.role = payload.role;
    newUser.plainPassword = payload.password;
    newUser.password = await hashPassword(payload.password);

    return await this.repository.save(newUser);
  }

  public async update(id: number, payload: UserUpdateDto): Promise<UserEntity> {
    const user = await this.findOneByIdOrFailed(id);

    if (payload.firstName !== undefined) {
      user.firstName = payload.firstName;
    }

    if (payload.lastName !== undefined) {
      user.lastName = payload.lastName;
    }

    if (payload.username !== undefined) {
      const checkoutUsername = await this.repository.findOneBy({ id: Not(id), username: payload.username });

      if (checkoutUsername) {
        throw new BadRequestException(`User with username: ${payload.username} already exists!`);
      }

      user.username = payload.username;
    }

    if (payload.email !== undefined) {
      const checkoutEmail = await this.repository.findOneBy({ id: Not(id), email: payload.email });

      if (checkoutEmail) {
        throw new BadRequestException(`User with email: ${payload.email} already exists!`);
      }

      user.email = payload.email;
    }

    if (payload.phone !== undefined) {
      const checkoutPhone = await this.repository.findOneBy({ id: Not(id), phone: payload.phone });

      if (checkoutPhone) {
        throw new BadRequestException(`User with phone: ${payload.phone} already exists!`);
      }  

      user.phone = payload.phone;
    }

    if (payload.password !== undefined) {
      user.password = await hashPassword(payload.password);
    }

    return await this.repository.save(user);
  }

  public async remove(id: number): Promise<UserEntity> {
    const user = await this.findOneByIdOrFailed(id);

    await this.repository.remove(user);

    return user;
  }
}