import { Injectable, OnModuleInit } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class MongoService implements OnModuleInit {
  onModuleInit() {
    console.log(process.env.DATABASE_URL);

    mongoose
      .connect(process.env.DATABASE_URL)
      .then(() => console.log('INFO: Connected to database.'))
      .catch((err) => console.log('ERROR: ' + err));
  }

  checkConnection() {
    return mongoose.ConnectionStates[mongoose.connection.readyState];
  }
}
