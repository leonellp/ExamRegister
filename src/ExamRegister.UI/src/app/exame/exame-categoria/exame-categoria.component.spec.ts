import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameCategoriaComponent } from './exame-categoria.component';

describe('ExameCategoriaComponent', () => {
  let component: ExameCategoriaComponent;
  let fixture: ComponentFixture<ExameCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
