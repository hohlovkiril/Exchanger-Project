import { BadRequestException, forwardRef, Inject, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RateCreateDto, RateGetManyDto, RateUpdateDto } from "src/dto";
import { RateEntity } from "src/entities";
import { CurrencyService } from "src/modules/currency/providers/currency.service";
import { Repository, SelectQueryBuilder } from "typeorm";

@Injectable()
export class RateService {

  private readonly logger: Logger = new Logger(RateService.name);

  constructor(
    @InjectRepository(RateEntity)
    private readonly repository: Repository<RateEntity>,
    @Inject(forwardRef(() => CurrencyService))
    private readonly currencyService: CurrencyService,
  ) {}

  private async createBuilder(): Promise<SelectQueryBuilder<RateEntity>> {
    return await this.repository.createQueryBuilder('rate')
      .leftJoinAndSelect('rate.clientCurrencyBuy', 'clientCurrencyBuy')
      .leftJoinAndSelect('rate.clientCurrencySell', 'clientCurrencySell');
  }

  public async findOneByIdOrNull(id: number): Promise<RateEntity | null> {
    const query = await this.createBuilder();

    query.where('rate.id = :id', { id });

    return await query.getOne();
  }

  public async findOneByIdOrFailed(id: number): Promise<RateEntity> {
    const rate = await this.findOneByIdOrNull(id);

    if (!rate) {
      throw new NotFoundException(`Rate with id: ${id} not found!`);
    }

    return rate;
  }

  public async findMany(payload: RateGetManyDto): Promise<RateEntity[]> {
    const query = await this.createBuilder();

    query.where('1 = 1');

    query.orderBy('rate.id', 'DESC');

    return await query.getMany();
  }

  public async create(payload: RateCreateDto): Promise<RateEntity> {
    const clientCurrencyBuy = await this.currencyService
      .findOneByIdOrFailed(payload.clientCurrencyBuyId);
    const clientCurrencySell = await this.currencyService
      .findOneByIdOrFailed(payload.clientCurrencySellId);

    const checkExistRate = await this.repository.findOneBy({
      clientCurrencyBuy, clientCurrencySell
    });

    if (checkExistRate) {
      throw new BadRequestException(
        `Rate with currency buy: ${payload.clientCurrencyBuyId} and currency sell: ${payload.clientCurrencySellId} alredy exists!`
      );
    }

    const newRate = await this.repository.create();
    newRate.status = payload.status;
    newRate.price = payload.price;
    newRate.autoUpdatePrice = payload.autoUpdatePrice;
    newRate.clientCurrencyBuy = clientCurrencyBuy;
    newRate.clientCurrencySell = clientCurrencySell;

    return await this.repository.save(newRate);
  }

  public async update(id: number, payload: RateUpdateDto): Promise<RateEntity> {
    const rate = await this.findOneByIdOrFailed(id);

    if (payload.status !== undefined) {
      rate.status = payload.status;
    }

    if (payload.price !== undefined) {
      rate.price = payload.price;
    }

    if (payload.autoUpdatePrice !== undefined) {
      rate.autoUpdatePrice = payload.autoUpdatePrice;
    }

    return await this.repository.save(rate);
  }

  public async remove(id: number): Promise<RateEntity> {
    const rate = await this.findOneByIdOrFailed(id);

    await this.repository.remove(rate);

    return rate;
  }
}