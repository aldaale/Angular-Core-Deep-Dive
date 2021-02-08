import { Component } from '@angular/core';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];


  // data = {
  //   title: 'angularkakka'
  // };
  // title = 'angular-for-beginners-osa1';

  onLogoClicked() {
    alert('hello World')
  }
  // onKeyUp(newTitle:string) {
  //   this.data.title = newTitle;
  // }
  
}
