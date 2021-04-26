import { TestBed } from '@angular/core/testing';

import { ExamemedicorespdiagnosticoService } from './examemedicorespdiagnostico.service';

describe('ExamemedicorespdiagnosticoService', () => {
  let service: ExamemedicorespdiagnosticoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamemedicorespdiagnosticoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
