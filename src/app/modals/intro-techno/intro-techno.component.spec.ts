import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTechnoComponent } from './intro-techno.component';

describe('IntroTechnoComponent', () => {
  let component: IntroTechnoComponent;
  let fixture: ComponentFixture<IntroTechnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroTechnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
