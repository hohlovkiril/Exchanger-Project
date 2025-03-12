import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { OrderService } from "../providers/order.service";
import { OrderCreateDto, OrderGetManyDto, OrderUpdateDto } from "src/dto";
import { User } from "src/common";

@Controller('/api/order')
export class OrderController {

  private readonly logger: Logger = new Logger(OrderController.name);

  constructor(
    private readonly service: OrderService,
  ) {}

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.service.findOneByIdOrFailed(id);
  }

  @Get()
  public async getMany(
    @Query() dto: OrderGetManyDto,
  ) {
    return await this.service.findMany(dto);
  }

  @Post()
  public async create(
    @Body() dto: OrderCreateDto,
    @User() user: any,
  ) {
    return await this.service.create({ ...dto, client: user });
  }

  @Patch(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: OrderUpdateDto,
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