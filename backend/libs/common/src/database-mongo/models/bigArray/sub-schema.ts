import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../../abstract.schema';
import { DumpSpotsSubSchema } from './dump-spots-sub-schema';

@Schema({ versionKey: false })
export class SubSchemaThree extends AbstractDocument {
  @Prop({ required: true, maxlength: 10 })
  name: String;

  @Prop({ required: true, maxlength: 9 })
  fatherName: String;

  @Prop({ required: true, maxlength: 8 })
  motherName: String;

  @Prop({ required: true })
  age: Number;

  @Prop()
  probability: Number;

  @Prop({ required: true })
  dumpSpots: DumpSpotsSubSchema[];
}
