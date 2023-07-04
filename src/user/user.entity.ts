import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {Role} from "../role/role.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column('text', {array: true, nullable: true, default: () => `ARRAY['${Role.User}']::text[]`})
    roles: string[];
}
