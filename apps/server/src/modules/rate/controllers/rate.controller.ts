import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { RateService } from "../providers/rate.service";
import { RateCreateDto, RateGetManyDto, RateUpdateDto } from "src/dto";

@Controller('/api/rate')
export class RateController {

  private readonly logger: Logger = new Logger(RateController.name);

  constructor(
    private readonly service: RateService,
  ) {}

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.service.findOneByIdOrFailed(id);
  }

  @Get()
  public async getmany(
    @Query() dto: RateGetManyDto,
  ) {
    return await this.service.findMany(dto);
  }

  @Post()
  public async create(
    @Body() dto: RateCreateDto,
  ) {
    return await this.service.create(dto);
  }

  @Patch(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: RateUpdateDto,
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