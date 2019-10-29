import { TestBed } from '@angular/core/testing';

import { PersonaserviceService } from './personaservice.service';

describe('PersonaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonaserviceService = TestBed.get(PersonaserviceService);
    expect(service).toBeTruthy();
  });
});
