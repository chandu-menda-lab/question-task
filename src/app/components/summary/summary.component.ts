// src/app/components/summary/summary.component.ts

import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Response } from '../../models/question.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  responses: Response[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    // this.responses = this.questionService.getResponses(); // Get responses from service initially
    this.questionService.responses$.subscribe(responses => {
      this.responses = responses; // Update responses on change
      console.log("this.questions::", this.responses);
    });
  }
}
