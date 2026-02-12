import {
  Controller,
  Post,
  Get,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { FarmService } from './farm.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('farms')
@UseGuards(JwtAuthGuard, RolesGuard)
export class FarmController {
  constructor(private farmService: FarmService) {}

  // CREATE FARM
  @Post()
  @Roles('ADMIN', 'FARMER')
  createFarm(@Request() req, @Body() body: any) {
    return this.farmService.createFarm(req.user.userId, body);
  }

  // GET MY FARMS
  @Get()
  @Roles('ADMIN', 'FARMER')
  getMyFarms(@Request() req) {
    return this.farmService.getMyFarms(req.user.userId);
  }
}
