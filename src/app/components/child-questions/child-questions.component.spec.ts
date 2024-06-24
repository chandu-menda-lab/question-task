import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildQuestionsComponent } from './child-questions.component';

describe('ChildQuestionsComponent', () => {
  let component: ChildQuestionsComponent;
  let fixture: ComponentFixture<ChildQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildQuestionsComponent]
    });
    fixture = TestBed.createComponent(ChildQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
