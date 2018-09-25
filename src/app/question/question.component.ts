import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  //Model
  question: Question = new Question(
    'Esta es una nueva pregunta sobre Android',
    'Miren, tengo una duda con una aplicacion',
    new Date,
    'devicon-android-plain colored'
  );

  constructor() { }

  ngOnInit() {
  }

}
