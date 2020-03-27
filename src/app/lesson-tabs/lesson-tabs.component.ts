import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) { }

  lessons = [  ]
  lessonId = ''
  moduleId = ''
  courseId = ''
  moduletitle=''
  ngOnInit(): void {
    console.log(this.route.params)

    // this.moduleId = this.route.params._value.moduleId;
    // this.courseId = this.route.params._value.courseId;
    // this.lessonId = this.route.params._value.lessonId;
    // this.service.findLessonsForModule(this.moduleId)
    //   .then(lessons => this.lessons = lessons);
    // this.service.findModuleById(this.moduleId)
    //   .then(module=> this.moduletitle = module.title);
    this.route.params.subscribe(params => {
      console.log("123123123")
      this.lessonId = params.lessonId;
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
      console.log(this.moduleId)
      this.service.findLessonsForModule(this.moduleId)
        .then(lessons => this.lessons = lessons);
      this.service.findModuleById(this.moduleId)
        .then(module=> this.moduletitle = module.title);
    });
  }

}
