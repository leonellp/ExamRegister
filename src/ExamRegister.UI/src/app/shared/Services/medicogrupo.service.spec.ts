import { TestBed } from '@angular/core/testing';

import { MedicogrupoService } from './medicogrupo.service';

describe('MedicogrupoService', () => {
  let service: MedicogrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicogrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
