import { TestBed } from '@angular/core/testing';

import { CategoriaexameService } from './categoriaexame.service';

describe('CategoriaexameService', () => {
  let service: CategoriaexameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaexameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
