import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 👈 REQUIRED to avoid re-import issues
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
