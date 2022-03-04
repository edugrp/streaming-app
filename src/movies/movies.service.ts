import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    constructor(@InjectRepository(Movie) private repo: Repository<Movie>) {}

    create(createMovieDto: CreateMovieDto) {
        const entity = this.repo.create(createMovieDto);
        return this.repo.save(entity);
    }

    findAll() {
        return this.repo.find();
    }

    findAllByGenre(genreId: number) {
        return this.repo.find({ genre: { id: genreId } });
    }

    async findOne(id: number) {
        const entity = await this.repo.findOne(id);
        if (!entity) {
            throw new NotFoundException(`Movie not found for ID #${id}`);
        }
        return entity;
    }

    async update(id: number, updateMovieDto: UpdateMovieDto) {
        const entity = await this.findOne(id);
        Object.assign(entity, updateMovieDto);

        return this.repo.save(entity);
    }

    async remove(id: number) {
        const entity = await this.findOne(id);

        return this.repo.remove(entity);
    }
}
