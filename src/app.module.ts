import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitizenModule } from './admin/modules/citizen.module';

@Module({
  imports: [CitizenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
