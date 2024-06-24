// src/app/components/questionnaire/questionnaire.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questions: Question[] = [];

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    // Subscribe to questions from service
    this.questionService.questions$.subscribe(questions => {
      this.questions = questions;
    });
  }

  /**
   * Method to handle response changes from child components
   * @param response The response object containing questionId and selectedOption
   */

  onResponseChange(response: any) {
    this.questionService.setResponse(response); // Subscribe to questions from service
  }
  
  /**
   * Navigates to the summary page with collected responses
   */

  goToSummary() {
    // Pass responses to summary page via service
    this.router.navigate(['/summary']); // Navigate to SummaryComponent
  }

  /**
   * Moves a question up in the list based on direction
   * @param index The question to be moved based on index
   */

  moveUp(index: number) {
    if (index > 0) {
      [this.questions[index], this.questions[index - 1]] = [this.questions[index - 1], this.questions[index]];
      this.questionService.setQuestions(this.questions); 
    }
  }

  /**
   * Moves a question down in the list based on direction
   * @param index The question to be moved based on index
   */

  moveDown(index: number) {
    if (index < this.questions.length - 1) {
      [this.questions[index], this.questions[index + 1]] = [this.questions[index + 1], this.questions[index]];
      this.questionService.setQuestions(this.questions);
    }
  }

}
