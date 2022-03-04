import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenresService {
    constructor(@InjectRepository(Genre) private repo: Repository<Genre>) {}

    create(createGenreDto: CreateGenreDto) {
        const entity = this.repo.create(createGenreDto);
        return this.repo.save(entity);
    }

    findAll() {
        return this.repo.find();
    }

    async findOne(id: number) {
        const entity = await this.repo.findOne(id);
        if (!entity) {
            throw new NotFoundException(`Genre not found for ID #${id}`);
        }
        return entity;
    }

    async findMovies(id: number) {
        const entity = await this.repo.findOne(id, { relations: ['movies'] });
        if (!entity) {
            throw new NotFoundException(`Genre not found for ID #${id}`);
        }
        return entity;
    }

    async update(id: number, updateGenreDto: UpdateGenreDto) {
        const entity = await this.findOne(id);
        Object.assign(entity, updateGenreDto);

        return this.repo.save(entity);
    }

    async remove(id: number) {
        const entity = await this.findOne(id);

        return this.repo.remove(entity);
    }
}
