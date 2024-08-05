import {config as dotenvConfig} from "dotenv";
import { registerAs } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({path: ".env.development"})

const config = {
        type: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ["dist/**/*.entity{.ts,.js"],
        migrations: ["dist/migrations/*{.ts,.js"],
        autoLoadEntities: true,
        synchronize: true,
        dropSchema: true
    }

    export default registerAs("typeorm", () => config)
    export const connectionSource = new DataSource(config as DataSourceOptions)