import { TestBed } from '@angular/core/testing';

import { PeliculasWebService } from './peliculas-web.service';

describe('PeliculasWebService', () => {
  let service: PeliculasWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculasWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
