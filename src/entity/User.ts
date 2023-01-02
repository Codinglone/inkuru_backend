import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    password: string 

    @Column()
    email: string

    @Column()
    role: string

    @Column({type: Date})
    createdOn: Date 

    @Column({type: Date})
    deletedOn: Date

    @Column({type: Date})
    updatedOn: Date

}
