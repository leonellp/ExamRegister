import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameMedicosolicComponent } from './exame-medicosolic.component';

describe('ExameMedicosolicComponent', () => {
  let component: ExameMedicosolicComponent;
  let fixture: ComponentFixture<ExameMedicosolicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameMedicosolicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameMedicosolicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
