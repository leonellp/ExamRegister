import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoDeMedicoComponent } from './grupo-de-medico.component';

describe('GrupoDeMedicoComponent', () => {
  let component: GrupoDeMedicoComponent;
  let fixture: ComponentFixture<GrupoDeMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoDeMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoDeMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
