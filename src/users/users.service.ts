import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<any | undefined> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
