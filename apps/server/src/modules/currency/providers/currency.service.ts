import { BadRequestException, Injectable, Logger, NotFoundException, OnModuleInit } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { InjectRepository } from "@nestjs/typeorm";
import { CurrencyType, NotificationVariants } from "@shared/enums";
import { CurrencyCreateDto, CurrencyGetManyDto, CurrencyUpdateDto } from "src/dto";
import { CurrencyEntity } from "src/entities";
import { NotificationCreateEvent } from "src/events";
import { MediaService } from "src/modules/media/providers/media.service";
import { Repository, SelectQueryBuilder, ILike, Not } from "typeorm";

@Injectable()
export class CurrencyService implements OnModuleInit {

  private readonly logger: Logger = new Logger(CurrencyService.name);

  constructor(
    @InjectRepository(CurrencyEntity) 
    private readonly repository: Repository<CurrencyEntity>,
    private readonly mediaService: MediaService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async onModuleInit() {
    // await this.create({
    //   label: 'Litcoin',
    //   symbol: 'LTC ',
    //   precision: 10,
    //   scale: 8,
    //   type: CurrencyType.CRYPTO,
    //   minimal: 0.1,
    //   reserve: 1,
    // });
  }

  private async createBuilder(): Promise<SelectQueryBuilder<CurrencyEntity>> {
    return await this.repository.createQueryBuilder('currency')
      .leftJoinAndSelect('currency.icon', 'icon')
      .leftJoinAndSelect('currency.buyRates', 'buyRates')
      .leftJoinAndSelect('buyRates.clientCurrencySell', 'clientCurrencySell')
      .leftJoinAndSelect('currency.sellRates', 'sellRates')
      .leftJoinAndSelect('sellRates.clientCurrencyBuy', 'clientCurrencyBuy');
  }

  public async findOneByIdOrNull(id: number): Promise<CurrencyEntity | null> {
    const query = await this.createBuilder();

    query.where('currency.id = :id', { id });

    return await query.getOne();
  }

  public async findOneByIdOrFailed(id: number): Promise<CurrencyEntity> {
    const currency = await this.findOneByIdOrNull(id);

    if (!currency) {
      throw new NotFoundException(`Currency with id: ${id} not found!`);
    }

    return currency;
  }

  public async findMany(payload: CurrencyGetManyDto): Promise<CurrencyEntity[]> {
    const query = await this.createBuilder();

    query.where('1 = 1');

    query.orderBy('currency.id', 'ASC');

    return await query.getMany();
  }

  public async create(payload: CurrencyCreateDto): Promise<CurrencyEntity> {
    const checkoutLabel = await this.repository.findOneBy({ label: ILike(payload.label) });
    const checkoutSymbol = await this.repository.findOneBy({ symbol: ILike(payload.symbol) });
    
    if (checkoutLabel) {
      throw new BadRequestException(
        `Currency with label: ${payload.label} already exists!`
      );
    } else if (checkoutSymbol) {
      throw new BadRequestException(
        `Currency with symbol: ${payload.symbol} already exists!`
      );
    }
    

    const newCurrency = await this.repository.create();
    newCurrency.label = payload.label;
    newCurrency.symbol = payload.symbol;
    newCurrency.minimal = payload.minimal;
    newCurrency.reserve = payload.reserve;

    if (payload.apiSymbol !== undefined) {
      newCurrency.apiSymbol = payload.apiSymbol;
    }

    if (payload.precision !== undefined) {
      newCurrency.precision = payload.precision;
    }

    if (payload.scale !== undefined) {
      newCurrency.scale = payload.scale;
    }

    if (payload.regex !== undefined) {
      newCurrency.regex = payload.regex;
    }

    if (payload.type !== undefined) {
      newCurrency.type = payload.type;
    }

    if (payload.iconId !== undefined) {
      const media = await this.mediaService.findOneByIdOrNull(payload.iconId);

      if (media) {
        newCurrency.icon = media;
      }
    }

    const event = new NotificationCreateEvent(
      `New Currency: ${newCurrency.label} Created!`,
      undefined,
      NotificationVariants.Info
    )

    this.eventEmitter.emit('notification.create', event);

    return await this.repository.save(newCurrency);
  }

  public async update(id: number, payload: CurrencyUpdateDto): Promise<CurrencyEntity> {
    const currency = await this.findOneByIdOrFailed(id);

    if (payload.label !== undefined) {
      const checkoutLabel = await this.repository.findOneBy({ id: Not(id), label: ILike(payload.label) });

      if (checkoutLabel) {
        throw new BadRequestException(`Currency with label: ${payload.label} already exists!`);
      }

      currency.label = payload.label;
    }

    if (payload.symbol !== undefined) {
      const checkoutSymbol = await this.repository.findOneBy({ id: Not(id), symbol: ILike(payload.symbol) });

      if (checkoutSymbol) {
        throw new BadRequestException(`Currency with symbol: ${payload.symbol} already exists!`);
      }

      currency.symbol = payload.symbol;
    }

    if (payload.apiSymbol !== undefined) {
      currency.apiSymbol = payload.apiSymbol;
    }

    if (payload.minimal !== undefined) {
      currency.minimal = payload.minimal;
    }

    if (payload.reserve !== undefined) {
      currency.reserve = payload.reserve;
    }

    if (payload.precision !== undefined) {
      currency.precision = payload.precision;
    }

    if (payload.scale !== undefined) {
      currency.scale = payload.scale;
    }

    if (payload.regex !== undefined) {
      currency.regex = payload.regex;
    }

    if (payload.type !== undefined) {
      currency.type = payload.type;
    }

    if (payload.iconId !== undefined) {
      const media = await this.mediaService.findOneByIdOrNull(payload.iconId);

      if (media) {

        if (currency.icon !== undefined) {
          await this.mediaService.remove(currency.icon.id);
        }

        currency.icon = media;
      }
    }

    const event = new NotificationCreateEvent(
      `Currency: ${currency.label} Updated!`,
      undefined,
      NotificationVariants.Info
    )

    this.eventEmitter.emit('notification.create', event);

    return await this.repository.save(currency);
  }

  public async remove(id: number): Promise<CurrencyEntity> {
    const currency = await this.findOneByIdOrFailed(id);

    await this.repository.remove(currency);

    return currency;
  }
}