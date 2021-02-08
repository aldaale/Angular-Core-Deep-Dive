import { Component,  EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
// import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;

  @Output()
  courseSelected = new EventEmitter<Course>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log('course card component clicked....');
    this.courseSelected.emit(this.course);
  }

}
