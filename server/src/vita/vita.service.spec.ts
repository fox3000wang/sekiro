import { Test, TestingModule } from '@nestjs/testing';
import { VitaService } from './vita.service';

describe('VitaService', () => {
  let service: VitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VitaService],
    }).compile();

    service = module.get<VitaService>(VitaService);
  });

  it('/ (GET)', () => {
    return request(service)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
