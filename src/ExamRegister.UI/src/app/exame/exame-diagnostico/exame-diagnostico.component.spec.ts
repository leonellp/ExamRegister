import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameDiagnosticoComponent } from './exame-diagnostico.component';

describe('ExameDiagnosticoComponent', () => {
  let component: ExameDiagnosticoComponent;
  let fixture: ComponentFixture<ExameDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameDiagnosticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
