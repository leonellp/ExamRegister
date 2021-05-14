import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaFilhaComponent } from './categoria-filha.component';

describe('CategoriaFilhaComponent', () => {
  let component: CategoriaFilhaComponent;
  let fixture: ComponentFixture<CategoriaFilhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaFilhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaFilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
