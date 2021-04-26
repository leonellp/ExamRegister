import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoMedicoComponent } from './grupo-medico.component';

describe('GrupoMedicoComponent', () => {
  let component: GrupoMedicoComponent;
  let fixture: ComponentFixture<GrupoMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
