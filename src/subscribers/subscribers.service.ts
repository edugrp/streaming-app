import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { Subscriber } from './entities/subscriber.entity';

@Injectable()
export class SubscribersService {
    constructor(@InjectRepository(Subscriber) private repo: Repository<Subscriber>) {}

    create(createSubscriberDto: CreateSubscriberDto) {
        const entity = this.repo.create(createSubscriberDto);
        return this.repo.save(entity);
    }

    findAll() {
        return this.repo.find();
    }

    async findOne(id: number) {
        const entity = await this.repo.findOne(id);
        if (!entity) {
            throw new NotFoundException(`Subscriber not found for ID #${id}`);
        }
        return entity;
    }

    async update(id: number, updateSubscriberDto: UpdateSubscriberDto) {
        const entity = await this.findOne(id);
        Object.assign(entity, updateSubscriberDto);

        return this.repo.save(entity);
    }

    async remove(id: number) {
        const entity = await this.findOne(id);

        return this.repo.remove(entity);
    }
}
