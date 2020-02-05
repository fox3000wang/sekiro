import { VitaService } from './vita.service';
import { VitaModule } from './vita.module';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('vita')
export class VitaController {
  constructor(private readonly vitaService: VitaService) {}

  @Get()
  // @ApiOperation({ title: 'test' })
  getVita() {
    return this.vitaService.getVita();
  }
}
