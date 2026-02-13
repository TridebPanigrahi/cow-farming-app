import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { FarmModule } from './farm/farm.module';
import { CowModule } from './cow/cow.module';

@Module({
  imports: [PrismaModule, AuthModule, FarmModule, CowModule],
})
export class AppModule {}
