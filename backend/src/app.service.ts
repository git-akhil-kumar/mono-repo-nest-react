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
  constructor(@InjectConnection() private readonly connection: Connection) {}

  getHello(): string {
    return 'Hello World!';
  }

  async update() {
    const data = await this.connection.query(
      `CREATE UNIQUE INDEX ON users (name);`,
    );
    return { data };
  }

  async create() {
    const newRandomName = this.generateRandomName();
    const data = await this.connection.query(
      `INSERT INTO users (name) VALUES ($1);`,
      [newRandomName],
    );
    return { data };
  }

  getAllUsers(): Promise<any[]> {
    const LIMIT = 10;
    const OFFSET = 0;
    return this.connection.query(`select * from users LIMIT $1 OFFSET $2;`, [
      LIMIT,
      OFFSET,
    ]);
  }

  generateRandomName() {
    const randomFirstName =
      this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
    const randomLastName =
      this.lastNames[Math.floor(Math.random() * this.lastNames.length)];

    const fullName = randomFirstName + ' ' + randomLastName;
    return fullName;
  }
}
