import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MediaEntity } from "src/entities";
import { Repository, SelectQueryBuilder } from "typeorm";

@Injectable()
export class MediaService {
  
  private readonly logger: Logger = new Logger(MediaService.name)

  constructor(
    @InjectRepository(MediaEntity)
    private readonly repository: Repository<MediaEntity>,
  ) {}

  private async createBuilder(): Promise<SelectQueryBuilder<MediaEntity>> {
    return await this.repository.createQueryBuilder('media')
  }

  public async findOneByIdOrNull(id: number): Promise<MediaEntity | null> {
    const query = await this.createBuilder();

    query.where('media.id = :id', { id });

    return await query.getOne();
  }

  public async findOneByIdOrFailed(id: number): Promise<MediaEntity> {
    const media = await this.findOneByIdOrNull(id);

    if (!media) {
      throw new NotFoundException(`Media with id: ${id} not found!`);
    }

    return media;
  }

  public async findMany(): Promise<MediaEntity[]> {
    const query = await this.createBuilder();

    query.where('1 = 1');

    query.orderBy('media.id', 'DESC');

    return await query.getMany();
  }

  public async create(): Promise<MediaEntity> {
    const newMedia = await this.repository.create();

    return newMedia;
  }

  public async update(id: number): Promise<MediaEntity> {
    const media = await this.findOneByIdOrFailed(id);

    return media;
  }

  public async remove(id: number): Promise<MediaEntity> {
    const media = await this.findOneByIdOrFailed(id);

    await this.repository.remove(media);

    return media;
  }
}