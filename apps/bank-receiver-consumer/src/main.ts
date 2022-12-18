/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 import { Logger } from '@nestjs/common';
 import { NestFactory } from '@nestjs/core';
 
 import { AppModule } from './app/app.module';
 
 const logger = new Logger();
 
 async function bootstrap() {
   const app = await NestFactory.create(AppModule);
 
   const globalPrefix = 'bank-receiver';
   app.setGlobalPrefix(globalPrefix);
 
   app.enableCors();
   
   const port = process.env.PORT || 3336;
   await app.listen(port);
   logger.log(
     `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
   );
 }
 
 bootstrap();
 