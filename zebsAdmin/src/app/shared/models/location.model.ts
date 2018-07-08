import { User } from "./user.model";

export class Location {
  name: string;
  location: string;
  postalAddress: string;

  constructor (name: string, location: string) {
    this.name = name;
    this.location = location;
  }
}
