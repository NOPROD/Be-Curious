import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderModalComponent } from './header.component';

describe('HeaderModalComponent', () => {
  let component: HeaderModalComponent;
  let fixture: ComponentFixture<HeaderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
