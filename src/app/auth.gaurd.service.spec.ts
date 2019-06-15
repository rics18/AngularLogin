import { TestBed, inject } from '@angular/core/testing';

import { Auth.GaurdService } from './auth.gaurd.service';

describe('Auth.GaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth.GaurdService]
    });
  });

  it('should be created', inject([Auth.GaurdService], (service: Auth.GaurdService) => {
    expect(service).toBeTruthy();
  }));
});
