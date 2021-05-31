import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { RegistredTime } from "./RegistredTime";

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @OneToMany(type => RegistredTime, user => User)
    registredTimes: RegistredTime[];

}
