import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService implements OnModuleInit {
  private _prisma: PrismaClient;

  async onModuleInit() {
    this._prisma = new PrismaClient();
    await this._prisma.$connect();
  }

  public get prisma() {
    return this._prisma;
  }
}
