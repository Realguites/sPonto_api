import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import User from "./User";


@Entity()
export class RegistredTime {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    time_registred: Date;

    @ManyToOne(type => User, registredTimes => RegistredTime)
    user: User;

}
