import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInformacaoComponent } from './form-informacao.component';

describe('FormInformacaoComponent', () => {
  let component: FormInformacaoComponent;
  let fixture: ComponentFixture<FormInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInformacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
