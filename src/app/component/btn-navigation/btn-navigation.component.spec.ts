import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNavigationComponent } from './btn-navigation.component';

describe('BtnNavigationComponent', () => {
  let component: BtnNavigationComponent;
  let fixture: ComponentFixture<BtnNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
