import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameGrupodemedicoComponent } from './exame-grupodemedico.component';

describe('ExameGrupodemedicoComponent', () => {
  let component: ExameGrupodemedicoComponent;
  let fixture: ComponentFixture<ExameGrupodemedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameGrupodemedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameGrupodemedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
