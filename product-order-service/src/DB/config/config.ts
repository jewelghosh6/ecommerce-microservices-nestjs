import { Dialect } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: string;
  dialect: Dialect;
  logging: boolean;
}

console.log(process.env.DB_PORT!)

const config: Record<string, DBConfig> = {
  development: {
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    database: process.env.DB_NAME!,
    host: process.env.DB_HOST!,
    port: process.env.DB_PORT!,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    database: process.env.DB_NAME!,
    host: process.env.DB_HOST!,
    port: process.env.DB_PORT!,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    database: process.env.DB_NAME!,
    host: process.env.DB_HOST!,
    port: process.env.DB_PORT!,
    dialect: 'postgres',
    logging: false,
  },
};

export = config;
