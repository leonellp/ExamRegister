import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPecaComponent } from './form-peca.component';

describe('FormPecaComponent', () => {
  let component: FormPecaComponent;
  let fixture: ComponentFixture<FormPecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
