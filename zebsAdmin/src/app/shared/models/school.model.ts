import { User } from "./user.model";


export class School {
  name: string;
  location: string;
  postalAddress: string;
  students: User[];
  teachers: User[];

  constructor (name: string, location: string, postalAddress: string) {
    this.name = name;
    this.location = location;
    this.postalAddress = postalAddress;
  }
}
