import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/CourseServiceClient";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  constructor(private svc: CourseServiceClient,
              private route: ActivatedRoute) { }
  questions = []
  quizId = ''
  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
    })
  }



}
