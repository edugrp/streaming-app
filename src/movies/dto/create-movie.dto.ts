import { IsString, IsNumber } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    lauchYear: number;

    @IsNumber()
    genreId: number;
}
