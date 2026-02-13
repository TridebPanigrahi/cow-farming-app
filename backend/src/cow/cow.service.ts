import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CowService {
  constructor(private prisma: PrismaService) {}
  //Create Cow under farm
  createCow(farmId: string, data: any) {
    return this.prisma.cow.create({
      data: {
        tagNumber: data.tagNumber,
        name: data.name,
        breed: data.breed,
        gender: data.gender,
        status: data.status ?? 'Active',
        farmId,
      },
    });
  }
  //Get all cows of a farm
  getCowsByFarm(farmId: string) {
    return this.prisma.cow.findMany({
      where: { farmId },
    });
  }
}
