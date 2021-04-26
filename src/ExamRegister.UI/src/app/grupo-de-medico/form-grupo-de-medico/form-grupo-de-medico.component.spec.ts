import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGrupoDeMedicoComponent } from './form-grupo-de-medico.component';

describe('FormGrupoDeMedicoComponent', () => {
  let component: FormGrupoDeMedicoComponent;
  let fixture: ComponentFixture<FormGrupoDeMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGrupoDeMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGrupoDeMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
