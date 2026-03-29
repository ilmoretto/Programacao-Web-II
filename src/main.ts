
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'node:path';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import expressEjsLayouts from 'express-ejs-layouts';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  app.use(expressEjsLayouts);
  app.set('layout', 'layouts/main-bootstrap');
  app.set('layout extractStyles', true);
  app.set('layout extractScripts', true);

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.locals.currentPath = req.path;
    next();
  });

  await app.listen(process.env.PORT ?? 3000);
  Logger.log(`Servidor rodando em http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
