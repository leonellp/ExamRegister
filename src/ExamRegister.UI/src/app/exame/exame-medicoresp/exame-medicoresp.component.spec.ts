import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameMedicorespComponent } from './exame-medicoresp.component';

describe('ExameMedicorespComponent', () => {
  let component: ExameMedicorespComponent;
  let fixture: ComponentFixture<ExameMedicorespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameMedicorespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameMedicorespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
