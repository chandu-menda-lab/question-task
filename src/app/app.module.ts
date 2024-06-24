// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuestionComponent } from './components/question/question.component';
import { ChildQuestionsComponent } from './components/child-questions/child-questions.component';
import { SummaryComponent } from './components/summary/summary.component'; // Ensure to import SummaryComponent
// Import other components and services as necessary

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    QuestionComponent,
    ChildQuestionsComponent,
    SummaryComponent // Add SummaryComponent to declarations
  ],
  imports: [
    BrowserModule,
    CommonModule, // Add CommonModule here
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
