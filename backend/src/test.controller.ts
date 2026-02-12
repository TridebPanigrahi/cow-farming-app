import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Roles } from './auth/roles.decorator';
import { RolesGuard } from './auth/roles.guard';

@Controller('test')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TestController {
  @Get('admin')
  @Roles('ADMIN')
  adminOnly() {
    return { message: 'Admin access granted' };
  }

  @Get('farmer')
  @Roles('FARMER')
  farmerOnly() {
    return { message: 'Farmer access granted' };
  }
}
