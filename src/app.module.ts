import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { LoggerDI } from './middleware/LoggerDImiddleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from "./config/typeorm"
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [ ConfigModule.forRoot(
    {
      isGlobal: true,
      load: [typeorm]
    }
  ), TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => config.get("typeorm")
  }),
  AuthModule,
  UsersModule,
  ProductsModule,
  CategoriesModule,
  OrdersModule,
  FileUploadModule,
  JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: "1h"}
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerDI).forRoutes('*')
  }
}
