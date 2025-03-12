import { forwardRef, Inject, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderCreateDto, OrderGetManyDto, OrderUpdateDto } from "src/dto";
import { OrderEntity } from "src/entities";
import { RateService } from "src/modules/rate/providers/rate.service";
import { Repository, SelectQueryBuilder } from "typeorm";

@Injectable()
export class OrderService {

  private readonly logger: Logger = new Logger(OrderService.name);

  constructor(
    @InjectRepository(OrderEntity)
    private readonly repository: Repository<OrderEntity>,
    @Inject(forwardRef(() => RateService))
    private readonly rateService: RateService,
  ) {}

  private async createBuilder(): Promise<SelectQueryBuilder<OrderEntity>> {
    return await this.repository.createQueryBuilder('order')
      .leftJoinAndSelect('order.client', 'client')
  }

  public async findOneByIdOrNull(id: number): Promise<OrderEntity | null> {
    const query = await this.createBuilder();

    query.where('order.id = :id', { id });

    return await query.getOne()
  }

  public async findOneByIdOrFailed(id: number): Promise<OrderEntity> {
    const order = await this.findOneByIdOrNull(id);

    if (!order) {
      throw new NotFoundException(`Order with id: ${id} not found!`);
    }

    return order;
  }

  public async findOneByPublicIdOrNull(publicId: number): Promise<OrderEntity | null> {
    const query = await this.createBuilder();

    query.where('order.publicId = :publicId', { publicId });

    return await query.getOne();
  }

  public async findOneByPublicIdOrFailed(publicId: number): Promise<OrderEntity> {
    const order = await this.findOneByPublicIdOrNull(publicId);

    if (!order) {
      throw new NotFoundException(`Order with publicId: ${publicId} not found!`);
    }

    return order;
  }

  public async findMany(payload: OrderGetManyDto): Promise<OrderEntity[]> {
    const query = await this.createBuilder();

    query.where('1 = 1');

    query.orderBy('order.id', 'DESC');

    return await query.getMany();
  }

  public async create(payload: OrderCreateDto): Promise<OrderEntity> {
    const newOrder = await this.repository.create();

    return newOrder;
  }

  public async update(id: number, payload: OrderUpdateDto): Promise<OrderEntity> {
    const order = await this.findOneByIdOrFailed(id);

    return order;
  }

  public async remove(id: number): Promise<OrderEntity> {
    const order = await this.findOneByIdOrFailed(id);

    await this.repository.remove(order);

    return order;
  }
}