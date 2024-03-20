import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractRepository } from '../../abstract.repository';
import { AbstractDocument } from '../../abstract.schema';

@Schema({ versionKey: false })
export class BigArrayDocument extends AbstractDocument {
  @Prop()
  timestamp: Date;

  @Prop()
  array: any[];
}

export const BigArraySchema = SchemaFactory.createForClass(BigArrayDocument);
