import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { RegistredTime } from "./RegistredTime";

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public email: string;

    @Column()
    public password: string;

    @Column()
    public role: string;

    @OneToMany(type => RegistredTime, user => User)
    public registredTimes: RegistredTime[];

}
