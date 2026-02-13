import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FarmModule } from './farm/farm.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, AuthModule, FarmModule],
})
export class AppModule {}
