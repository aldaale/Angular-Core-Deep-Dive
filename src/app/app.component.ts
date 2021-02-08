import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  courses = COURSES;

  startDate = new Date(2000, 0, 1);
  title = COURSES[0].description;
  price = 9.99;
  rate = 0.55;
  course = COURSES[0];

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
  
  onCourseSelected(course:Course) {
    console.log('app component has been clicked.....', course);
}

}
