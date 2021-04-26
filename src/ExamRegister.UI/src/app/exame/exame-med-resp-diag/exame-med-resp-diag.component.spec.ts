/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExameMedRespDiagComponent } from './exame-med-resp-diag.component';

describe('ExameMedRespDiagComponent', () => {
  let component: ExameMedRespDiagComponent;
  let fixture: ComponentFixture<ExameMedRespDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExameMedRespDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameMedRespDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
