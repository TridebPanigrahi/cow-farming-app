import { Test, TestingModule } from '@nestjs/testing';
import { CowController } from './cow.controller';

describe('CowController', () => {
  let controller: CowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CowController],
    }).compile();

    controller = module.get<CowController>(CowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
