import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamePecaComponent } from './exame-peca.component';

describe('ExamePecaComponent', () => {
  let component: ExamePecaComponent;
  let fixture: ComponentFixture<ExamePecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamePecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamePecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
