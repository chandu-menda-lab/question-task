// src/app/models/question.model.ts

export interface Question {
  id: number;
  text: string;
  type: 'radio' | 'checkbox' | 'select' | 'text';
  options: string[];
  children?: Question[];
  dependsOn: string;
}

export interface ChildQuestion extends Question {
  dependsOn: string;
}

export interface Response {
  questionId: number;
  selectedOption: string | string[];
}
