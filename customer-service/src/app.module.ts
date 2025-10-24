import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT || 5432),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
