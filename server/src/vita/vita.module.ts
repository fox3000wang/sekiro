import { Module } from '@nestjs/common';
import { VitaController } from './vita.controller';
import { VitaService } from './vita.service';

@Module({
  controllers: [VitaController],
  providers: [VitaService]
})
export class VitaModule {}
