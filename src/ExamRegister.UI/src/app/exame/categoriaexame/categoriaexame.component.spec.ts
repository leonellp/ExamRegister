import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaexameComponent } from './categoriaexame.component';

describe('CategoriaexameComponent', () => {
  let component: CategoriaexameComponent;
  let fixture: ComponentFixture<CategoriaexameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaexameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaexameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
