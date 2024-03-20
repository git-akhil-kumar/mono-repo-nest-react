import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '../../abstract.repository';
import { BigArrayDocument } from './schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BigArrayRepository extends AbstractRepository<BigArrayDocument> {
  protected readonly logger = new Logger(BigArrayRepository.name);

  constructor(
    @InjectModel(BigArrayDocument.name) bigArrayModel: Model<BigArrayDocument>,
  ) {
    super(bigArrayModel);
  }
}
