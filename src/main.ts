import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  
  const options = new DocumentBuilder()
    .setTitle('Errors')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('erors')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
  const ip = await app.getUrl()
  console.log(`Application is running on: ${ip}`);
}
bootstrap();
