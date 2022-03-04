import { Genre } from 'src/genres/entities/genre.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    lauchYear: number;

    @ManyToOne(() => Genre, (genre) => genre.movies, { eager: true })
    @JoinColumn()
    genre: Genre;
}
