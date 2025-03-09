import { Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { MediaService } from "../providers/media.service";

@Controller('media')
export class MediaController {

  private readonly logger: Logger = new Logger(MediaController.name);

  constructor(
    private readonly service: MediaService,
  ) {}

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.service.findOneByIdOrFailed(id);
  }

  @Get()
  public async getMany() {
    return await this.service.findMany();
  }

  @Post()
  public async create() {
    return await this.service.create();
  }

  @Patch(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.service.update(id);
  }

  @Delete(':id')
  public async remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.service.remove(id);
  }
}