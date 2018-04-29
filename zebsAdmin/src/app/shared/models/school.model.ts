import { User } from "./user.model";


export class School {
  name: string;
  location: string;
  address: string;
  students: User[];
  teachers: User[];

  constructor (name: string, location: string, address: string) {
    this.name = name;
    this.location = location;
    this.address = address;
  }
}
