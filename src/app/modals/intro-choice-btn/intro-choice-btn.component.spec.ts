import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroChoiceBtnComponent } from './intro-choice-btn.component';

describe('IntroChoiceBtnComponent', () => {
  let component: IntroChoiceBtnComponent;
  let fixture: ComponentFixture<IntroChoiceBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroChoiceBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroChoiceBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
