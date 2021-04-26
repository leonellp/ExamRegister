import { TestBed } from '@angular/core/testing';

import { PacienteinformacaoService } from './pacienteinformacao.service';

describe('PacienteinformacaoService', () => {
  let service: PacienteinformacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteinformacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
