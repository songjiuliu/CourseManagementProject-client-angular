import {Component, NgZone, OnInit, SimpleChanges} from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient,route: ActivatedRoute) {
    route.params.subscribe(param => {
      //let courses = param['courses'];
      this.service.findAllCourses()
        .then(courses => this.courses = courses);
    });
  }

  courseTitle = '';
  fileIcon = faFile;
  courses = [
  ];

  addCourse = (title) => {
    //this.courses.push({title})
    this.service.createCourse({title: title}).then(this.service.findAllCourses).then(courses => this.courses = courses)
  }
  deleteCourse = (deletedCourse) => {
    console.log(deletedCourse._id)
    this.courses = this.courses.filter(course => course !== deletedCourse)
    this.service.deleteCourse(deletedCourse._id)
  }
  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);

  }

}
