// src/app/services/question.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Question, Response } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsSource = new BehaviorSubject<Question[]>([]);
  questions$ = this.questionsSource.asObservable();

  private responsesSource = new BehaviorSubject<Response[]>([]);
  responses$ = this.responsesSource.asObservable();

  constructor(private http: HttpClient) {
    this.loadQuestions();
  }

  loadQuestions() {
    this.http.get<Question[]>('assets/questions.json').subscribe(questions => {
      this.questionsSource.next(questions);
    });
  }

  setQuestions(questions: Question[]) {
    this.questionsSource.next(questions);
  }

  setResponse(response: Response) {
    const responses = this.responsesSource.value;
    const index = responses.findIndex(r => r.questionId === response.questionId);
    if (index >= 0) {
      responses[index] = response;
    } else {
      responses.push(response);
    }
    this.responsesSource.next(responses); // Update responsesSource
  }

  getResponses(): Response[] {
    return this.responsesSource.value;
  }
}
