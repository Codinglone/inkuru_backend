import "reflect-metadata"
import { DataSource } from "typeorm"
import { Blogs } from "./entity/Blogs"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "fab3227423",
    database: "inkuru",
    synchronize: true,
    logging: false,
    entities: [Blogs],
    migrations: [],
    subscribers: [],
})
