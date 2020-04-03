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
        .then(qs => this.questions = qs).then(rs=>console.log(this.questions))
    })

  }

  submitQuiz = () => {
    fetch(`http://localhost:5000/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => alert("Your final score is :"+result.score))
  }

}
