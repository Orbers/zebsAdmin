import { School } from "./school.model";
import { Location } from "./location.model";

export class User {
  firstName: string;
  lastName: string;
  dob: Date;
  location: Location;
  phoneNumber: number[];
  attendedSchools: School[];
  teachingLocations: School [];
}
