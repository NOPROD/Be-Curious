import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroBasicSettingsComponent } from './intro-basic-settings.component';

describe('IntroBasicSettingsComponent', () => {
  let component: IntroBasicSettingsComponent;
  let fixture: ComponentFixture<IntroBasicSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroBasicSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroBasicSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
