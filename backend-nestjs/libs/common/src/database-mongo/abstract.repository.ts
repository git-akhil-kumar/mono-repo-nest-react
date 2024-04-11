import {
  AggregateOptions,
  FilterQuery,
  Model,
  PipelineStage,
  Types,
  UpdateQuery,
} from 'mongoose';
import { AbstractDocument } from './abstract.schema';
import { ObjectId } from 'typeorm';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  constructor(protected readonly model: Model<TDocument>) {}

  async exists(filterQuery: FilterQuery<TDocument>) {
    return this.model.exists(filterQuery);
  }

  async insert(document: Omit<TDocument, '_id'>) {
    const createDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });

    return (await createDocument.save()).toJSON();
  }

  async insertMany(documents: [TDocument]) {
    return this.model.insertMany(documents);
  }

  async findOne(filterQuery: FilterQuery<TDocument>) {
    return this.model.findOne(filterQuery).lean(true);
  }

  async find(filterQuery: FilterQuery<TDocument>) {
    return this.model.find(filterQuery).lean(true);
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    updateQuery: UpdateQuery<TDocument>,
  ) {
    return this.model
      .findOneAndUpdate(filterQuery, updateQuery, {
        new: true,
      })
      .lean(true);
  }

  async findOneAndDelete(filterQuery: FilterQuery<TDocument>) {
    return this.model.findOneAndDelete(filterQuery);
  }

  async updateMany(
    filterQuery: FilterQuery<TDocument>,
    updateQuery: UpdateQuery<TDocument>,
  ) {
    return this.model.updateMany(filterQuery, updateQuery);
  }

  async aggregate(pipeline: PipelineStage[], options: AggregateOptions) {
    return this.model.aggregate(pipeline, options);
  }

  async countDocuments(filterQuery: FilterQuery<TDocument>) {
    return this.model.countDocuments(filterQuery);
  }
}
