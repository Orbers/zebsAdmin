import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolListService } from './school-list/school-list.service';
import { SchoolDetailsComponent } from './school-details/school-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SchoolListComponent,
    SchoolDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [SchoolListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
