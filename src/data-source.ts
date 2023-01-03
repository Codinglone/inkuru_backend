import "reflect-metadata"
import { DataSource } from "typeorm"
import { Blogs } from "./entity/Blogs"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "fab3227423",
    database: "inkuru",
    synchronize: true,
    logging: false,
    entities: [User,Blogs],
    migrations: [],
    subscribers: [],
})
