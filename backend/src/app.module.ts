import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FarmModule } from './farm/farm.module';

@Module({
  imports: [AuthModule, FarmModule],
})
export class AppModule {}
