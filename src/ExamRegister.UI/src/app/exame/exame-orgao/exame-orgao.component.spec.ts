import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameOrgaoComponent } from './exame-orgao.component';

describe('ExameOrgaoComponent', () => {
  let component: ExameOrgaoComponent;
  let fixture: ComponentFixture<ExameOrgaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameOrgaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
