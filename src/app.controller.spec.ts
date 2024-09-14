import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [AppService],
    }).compile();

    appController = app.get<ProductController>(ProductController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      console.log("firefly!"); 
    });
  });
});
