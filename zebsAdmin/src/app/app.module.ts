import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolListService } from './school-list/school-list.service';
import { SchoolDetailsComponent } from './school-details/school-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SchoolListComponent,
    SchoolDetailsComponent,
    LessonListComponent,
    LessonDetailComponent,
    TeacherListComponent,
    TeacherDetailComponent,
    StudentListComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [SchoolListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
