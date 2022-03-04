import { Expose } from 'class-transformer';

export class MovieDto {
    @Expose()
    id: number;

    @Expose()
    name: string;
}
