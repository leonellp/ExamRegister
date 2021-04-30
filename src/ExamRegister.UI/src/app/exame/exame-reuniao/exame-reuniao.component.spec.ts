import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameReuniaoComponent } from './exame-reuniao.component';

describe('ExameReuniaoComponent', () => {
  let component: ExameReuniaoComponent;
  let fixture: ComponentFixture<ExameReuniaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameReuniaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
