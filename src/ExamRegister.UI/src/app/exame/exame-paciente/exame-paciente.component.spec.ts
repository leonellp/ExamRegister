import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamePacienteComponent } from './exame-paciente.component';

describe('ExamePacienteComponent', () => {
  let component: ExamePacienteComponent;
  let fixture: ComponentFixture<ExamePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamePacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
