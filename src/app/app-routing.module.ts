// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { SummaryComponent } from './components/summary/summary.component'; // Import SummaryComponent

const routes: Routes = [
  { path: '', redirectTo: '/questionnaire', pathMatch: 'full' },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'summary', component: SummaryComponent } // Add route for SummaryComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
