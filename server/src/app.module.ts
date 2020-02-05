import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VitaModule } from './vita/vita.module';

@Module({
  imports: [VitaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
