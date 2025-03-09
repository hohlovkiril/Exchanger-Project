import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { CurrencyService } from "../providers/currency.service";
import { CurrencyCreateDto, CurrencyGetManyDto } from "src/dto";

@Controller('/api/currency')
export class CurrencyController {

  private readonly logger: Logger = new Logger(CurrencyController.name);

  constructor(
    private readonly service: CurrencyService,
  ) {}

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number
  ) {
    return await this.service.findOneByIdOrFailed(id);
  }

  @Get()
  public async getMany(
    @Query() dto: CurrencyGetManyDto,
  ) {
    return await this.service.findMany(dto);
  }

  @Post()
  public async create(
    @Body() dto: CurrencyCreateDto
  ) {
    return await this.service.create(dto);
  }

  @Patch(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CurrencyCreateDto,
  ) {
    return await this.service.update(id, dto);
  }

  @Delete(':id')
  public async remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.service.remove(id);
  }
}