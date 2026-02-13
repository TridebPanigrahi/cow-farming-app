import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { CowService } from './cow.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('cows')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CowController {
  constructor(private cowService: CowService) {}
  //Add Cow to farm
  @Post(':farmId')
  @Roles('ADMIN', 'FARMER')
  createCow(@Param('farmId') farmId: string, @Body() body: any) {
    return this.cowService.createCow(farmId, body);
  }

  //Get Cow for the farm
  @Get(':farmId')
  @Roles('ADMIN', 'EMPLOYEE', 'FARMER')
  getCows(@Param('farmId') farmId: string) {
    return this.cowService.getCowsByFarm(farmId);
  }
}
