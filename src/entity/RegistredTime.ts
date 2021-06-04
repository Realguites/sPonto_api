import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import User from "./User";


@Entity()
export class RegistredTime {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public time_registred: Date;

    @ManyToOne(type => User, registredTimes => RegistredTime , { eager: true })
    public user: User;

}
