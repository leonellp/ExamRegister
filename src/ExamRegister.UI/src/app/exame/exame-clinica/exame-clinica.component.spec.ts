import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameClinicaComponent } from './exame-clinica.component';

describe('ExameClinicaComponent', () => {
  let component: ExameClinicaComponent;
  let fixture: ComponentFixture<ExameClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameClinicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
