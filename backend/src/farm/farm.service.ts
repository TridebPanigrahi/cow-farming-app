import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FarmService {
  constructor(private prisma: PrismaService) {}

  // CREATE FARM
  createFarm(userId: string, data: any) {
    return this.prisma.farm.create({
      data: {
        name: data.name,
        location: data.location,
        latitude: data.latitude,
        longitude: data.longitude,
        ownerId: userId,
      },
    });
  }

  // GET FARMS OF LOGGED-IN USER
  getMyFarms(userId: string) {
    return this.prisma.farm.findMany({
      where: { ownerId: userId },
    });
  }
}
