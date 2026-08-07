import { TestBed } from '@angular/core/testing';

import { RegistroTiempo } from './registro-tiempo';

describe('RegistroTiempo', () => {
  let service: RegistroTiempo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroTiempo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
