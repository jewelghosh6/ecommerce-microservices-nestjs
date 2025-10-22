import { Sequelize } from 'sequelize-typescript';
import { Notification } from './notification.model';
import { Customer } from './customer.model';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +(process.env.DB_PORT || 5432),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'ecommerce_db',
  logging: false,
  models: [Notification, Customer]
});

export const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');

    // Sync models only in dev
    // if (process.env.NODE_ENV !== 'production') {
    //   await sequelize.sync({ alter: true });
    //   console.log('🧩 Models synchronized successfully.');
    // }
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};
