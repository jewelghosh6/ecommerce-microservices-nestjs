import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // 1️⃣ Create HTTP Nest app
  const app = await NestFactory.create(AppModule);

  // 2️⃣ Attach RMQ microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:password@rabbitmq:5672'],
      queue: 'order_queue',
      queueOptions: { durable: true },
      socketOptions: {
        heartbeatIntervalInSeconds: 5,
        reconnectTimeInSeconds: 5,
      },
    },
  });

  // 3️⃣ Start RMQ microservice
  await app.startAllMicroservices();

  // 4️⃣ Start HTTP server and bind to 0.0.0.0 for Docker access
  await app.listen(3000, '0.0.0.0');
  console.log('🚀 HTTP + RMQ microservice running on port 3000');
}

bootstrap();
