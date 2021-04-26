/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PecaComponent } from './peca.component';

describe('PecaComponent', () => {
  let component: PecaComponent;
  let fixture: ComponentFixture<PecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
