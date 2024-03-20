import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  readonly firstNames = [
    'John',
    'Alice',
    'David',
    'Emily',
    'Michael',
    'Sophia',
    'Daniel',
    'Olivia',
    'Akhil',
    'Ronak',
  ];
  readonly lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Kumar',
    'Singh',
  ];

  getHello(): string {
    return 'Hello World!';
  }

  async update() {}

  async create() {}

  getAllUsers() {}

  generateRandomName() {
    const randomFirstName =
      this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
    const randomLastName =
      this.lastNames[Math.floor(Math.random() * this.lastNames.length)];

    const fullName = randomFirstName + ' ' + randomLastName;
    return fullName;
  }
}
