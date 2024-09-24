import { Controller, Get, Inject } from '@nestjs/common';
import { MongoService } from './database/mongo.service';

interface HealthStatus {
  version: number;
  status: 'up' | 'dowm';
  database_connection: string;
}

@Controller('api')
export class HealthController {
  @Inject()
  private readonly mongo: MongoService;

  @Get('/health')
  async heath(): Promise<HealthStatus> {
    const dbStatus = this.mongo.checkConnection();
    return {
      version: 1.0,
      status: 'up',
      database_connection: dbStatus,
    };
  }
}
