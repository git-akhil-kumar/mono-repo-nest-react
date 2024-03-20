import { BigArrayRepository } from '@app/common/database-mongo/models/bigArray';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // constructor(private readonly bigArrayRepo: BigArrayRepository) {}

  get() {
    // return this.bigArrayRepo.find({});
  }
}
