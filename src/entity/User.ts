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

    @CreateDateColumn({type: Date})
    createdOn: Date 

    @DeleteDateColumn({type: Date})
    deletedOn: Date

    @UpdateDateColumn({type: Date})
    updatedOn: Date

}
