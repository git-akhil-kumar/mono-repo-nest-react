import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { AbstractDocument } from './abstract.schema';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  constructor(protected readonly model: Model<TDocument>) {}

  async insert(document: TDocument) {
    const createDocument = new this.model(document);

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
}
