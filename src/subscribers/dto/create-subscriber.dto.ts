import { IsString } from 'class-validator';

export class CreateSubscriberDto {
    @IsString()
    name: string;

    @IsString()
    email: string;
}
