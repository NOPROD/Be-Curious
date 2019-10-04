import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRevealComponent } from './custom-reveal.component';

describe('CustomRevealComponent', () => {
  let component: CustomRevealComponent;
  let fixture: ComponentFixture<CustomRevealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRevealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
