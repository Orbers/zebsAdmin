import { School } from "./school.model";

export class User {
  firstName: string;
  lastName: string;
  dob: Date;
  homeLocation: string;
  postalAddress: string;
  phoneNumber: number[];
  zebs: School[];
}
