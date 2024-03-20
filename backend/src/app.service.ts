import {
  BigArrayDocument,
  BigArrayRepository,
} from '@app/common/database-mongo/models/bigArray';
import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class AppService {
  constructor(private readonly bigArrayRepository: BigArrayRepository) {}
  generateRandomAlphabets(size: number): string {
    if (size > 26)
      throw new Error('Size must be 26 or less to ensure uniqueness');

    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let array = alphabets.split('');
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array.join('').substring(0, size);
  }
  get() {
    return this.bigArrayRepository.find({});
  }

  post() {
    const bigArray = [];
    for (let i = 0; i < 200; i++) {
      let newObj = {};
      if (i % 15 === 0) {
        newObj = {
          _id: new Types.ObjectId(),
          name: Math.random() * 1000,
          number: Math.random() * 1000,
          hello: Math.random() * 1000,
          a: Math.random() * 1000,
          b: Math.random() * 1000,
          c: Math.random() * 1000,
          d: Math.random() * 1000,
        };
      } else if (i % 5 === 0) {
        newObj = {
          _id: new Types.ObjectId(),
          x: Math.random() * 1000,
          y: Math.random() * 1000,
          z: Math.random() * 1000,
          zz: Math.random() * 1000,
        };
      } else if (i % 3 === 0) {
        newObj = {
          _id: new Types.ObjectId(),
          name: this.generateRandomAlphabets(6),
          fatherName: this.generateRandomAlphabets(3),
          mothersName: this.generateRandomAlphabets(6),
        };
      } else {
        newObj = {
          _id: new Types.ObjectId(),
          managersName: this.generateRandomAlphabets(6),
          office: {
            colleage: this.generateRandomAlphabets(2),
            company: Math.random() * 1000,
            salary: Math.random() * 1000,
          },
        };
      }
      bigArray.push(newObj);
    }

    const bigArrayInsertObj: Omit<BigArrayDocument, '_id'> = {
      timestamp: new Date(),
      array: bigArray,
    };
    this.bigArrayRepository.insert(bigArrayInsertObj);
  }
}
