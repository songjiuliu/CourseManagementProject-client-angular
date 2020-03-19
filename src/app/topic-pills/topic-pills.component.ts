import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: CourseServiceClient) { }

  topics = [
    {_id: '123', title: 'Topic 1'}
  ]

  courseId = ''
  moduleId = ''
  lessonId = ''
  topicId  = ''
  ngOnInit(): void {
    // this.courseId = this.route.params._value.courseId;
    // this.moduleId = this.route.params._value.moduleId;
    // this.lessonId =this.route.params._value.lessonId;
    // this.topicId = this.route.params._value.topicId;
    // console.log(this.lessonId)
    // this.service.findTopicsForLesson(this.lessonId)
    //   .then(topics => this.topics = topics);
    this.route.params.subscribe(params => {
      console.log("lsj")
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.topicId = params.topicId;
      console.log("lsj2")
      this.service.findTopicsForLesson(this.lessonId)
        .then(topics => this.topics = topics);
    });
  }
}
