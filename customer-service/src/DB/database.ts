import { Sequelize } from "sequelize-typescript";
// import { Product } from "./models/Product";
// import { Order } from "./models/Order";
// import { OrderItem } from "./models/OrderItem";

export const sequelize = new Sequelize({
  database: process.env.DB_NAME || "product_order_db",
  dialect: "postgres",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "postgres",
  host: process.env.DB_HOST || "postgres",
//   models: [Product, Order, OrderItem],
  logging: false,
});
