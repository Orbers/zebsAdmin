import { Injectable } from '@angular/core';
import { School } from '../shared/models/school.model';

@Injectable()
export class SchoolListService {
  private schools: School[] = [
    new School('Sunbury', 'Sunbury Christian Camp', 'PO Box 442 Darnall 4480'),
    new School('ZEBS 1', 'ZEBS location 1', 'PO BOX 123 Durban 9876'),
    new School('ZEBS 2', 'ZEBS location 2', 'PO BOX 123 Durban 9876'),
    new School('ZEBS 3', 'ZEBS location 3', 'PO BOX 123 Durban 9876'),
    new School('ZEBS 4', 'ZEBS location 4', 'PO BOX 123 Durban 9876'),
    new School('ZEBS 5', 'ZEBS location 5', 'PO BOX 123 Durban 9876'),
    new School('ZEBS 6', 'ZEBS location 6', 'PO BOX 123 Durban 9876'),
    new School('ZEBS 7', 'ZEBS location 7', 'PO BOX 123 Durban 9876'),
    new School('ZEBS 8', 'ZEBS location 8', 'PO BOX 123 Durban 9876'),
    new School('ZEBS 9', 'ZEBS location 9', 'PO BOX 123 Durban 9876')
  ];
  constructor() { }

  getSchools() {
     return this.schools.slice();
  }


}
