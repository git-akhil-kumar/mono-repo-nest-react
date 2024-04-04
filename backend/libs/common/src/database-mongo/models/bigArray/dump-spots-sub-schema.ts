import { Prop } from '@nestjs/mongoose';
import { AbstractDocument } from '../../abstract.schema';

export class DumpSpotsSubSchema extends AbstractDocument {
  @Prop({ required: true })
  lat: Number;

  @Prop({ required: true })
  lon: Number;

  @Prop({ required: true, default: false })
  isDumpSpot?: Boolean;

  @Prop({ required: true, default: new Date() })
  timestamp: Date;
}
