import { Module } from '@nestjs/common';
import { ProductController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3307, 
      username: 'root',
      password: 'root',
      database: 'producto',
      autoLoadEntities: true,
      synchronize: false, 
    }),
   ProductModule,
  ],
})
export class AppModule {}
