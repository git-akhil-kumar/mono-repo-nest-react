import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractRepository } from '../../abstract.repository';
import { AbstractDocument } from '../../abstract.schema';
import { SubSchemaThree } from './sub-schema';

@Schema({ versionKey: false })
export class BigArrayDocument extends AbstractDocument {
  @Prop()
  timestamp: Date;

  @Prop({ required: true, index: true })
  array: SubSchemaThree[];
}

export const BigArraySchema = SchemaFactory.createForClass(BigArrayDocument);
