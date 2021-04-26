import { TestBed } from '@angular/core/testing';

import { MedicoclinicaService } from './medicoclinica.service';

describe('MedicoclinicaService', () => {
  let service: MedicoclinicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicoclinicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
