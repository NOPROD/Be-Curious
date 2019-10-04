import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroExplainComponent } from './intro-explain.component';

describe('IntroExplainComponent', () => {
  let component: IntroExplainComponent;
  let fixture: ComponentFixture<IntroExplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroExplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroExplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
