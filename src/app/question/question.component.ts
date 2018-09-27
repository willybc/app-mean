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
    'No hi ha ningú que estimi el dolor mateix, que el busqui i que vulgui tenir-lo, simplement perquè és dolor',
    new Date,
    'devicon-android-plain colored'
  );

  constructor() { }

  ngOnInit() {
  }

}
