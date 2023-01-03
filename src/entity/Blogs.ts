import { CreateDateColumn, PrimaryGeneratedColumn, Column, UpdateDateColumn, Entity } from "typeorm";

@Entity()

export class Blogs {

    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    title: string 

    @Column()
    body: string 

    @CreateDateColumn({type: Date})
    createdOn: Date 

    @UpdateDateColumn({type: Date})
    updatedOn: Date
}