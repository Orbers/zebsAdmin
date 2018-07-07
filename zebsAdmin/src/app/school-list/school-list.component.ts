import { Component, OnInit } from '@angular/core';
import { SchoolListService } from './school-list.service';
import { School } from '../shared/models/school.model';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools: School[];
  constructor(private schoolList: SchoolListService) { }

  ngOnInit() {
    this.schools = this.schoolList.getSchools();
  }

}
