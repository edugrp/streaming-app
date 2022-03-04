import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscriber {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @AfterInsert()
    logInsert() {
        console.log('Insert - Subscriber ID: ', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Update - Subscriber ID: ', this.id);
    }

    @AfterRemove()
    logDelete() {
        console.log('Delete - Subscriber ID: ', this.id);
    }
}
