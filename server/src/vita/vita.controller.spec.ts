import { Test, TestingModule } from '@nestjs/testing';
import { VitaController } from './vita.controller';

describe('Vita Controller', () => {
  let controller: VitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VitaController],
    }).compile();

    controller = module.get<VitaController>(VitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
