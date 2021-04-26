import { TestBed } from '@angular/core/testing';

import { ExamediagService } from './examediag.service';

describe('ExamediagService', () => {
  let service: ExamediagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamediagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
