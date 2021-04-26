import { TestBed } from '@angular/core/testing';

import { GrupodemedicoService } from './grupodemedico.service';

describe('GrupodemedicoService', () => {
  let service: GrupodemedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupodemedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
