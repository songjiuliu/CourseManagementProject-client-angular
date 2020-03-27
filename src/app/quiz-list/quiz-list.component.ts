import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  constructor(private service: CourseServiceClient ,private route: ActivatedRoute) { }

  quizzes = []
  courseId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
    })

    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes)
  }

}
