import { Module } from '@nestjs/common';
import { CowService } from './cow.service';
import { CowController } from './cow.controller';

@Module({
  controllers: [CowController],
  providers: [CowService],
})
export class CowModule {}
