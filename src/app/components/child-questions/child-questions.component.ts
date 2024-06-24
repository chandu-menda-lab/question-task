// src/app/components/child-questions/child-questions.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { Response } from '../../models/question.model';

@Component({
  selector: 'app-child-questions',
  templateUrl: './child-questions.component.html',
  styleUrls: ['./child-questions.component.css']
})
export class ChildQuestionsComponent implements OnInit {
  @Input() parentQuestion!: Question; // Input property for parent question
  childQuestions: Question[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.responses$.subscribe(responses => {
      const response = responses.find(r => r.questionId === this.parentQuestion.id);
      console.log("::response::", response);
      if (response) {
        this.childQuestions = this.parentQuestion.children?.filter(child => child.dependsOn === response.selectedOption) || [];
      } else {
        this.childQuestions = [];
      }
    });
  }

  onResponseChange(response: Response) {
    console.log("childResponse::",response);
    
    this.questionService.setResponse(response);
  }
}
