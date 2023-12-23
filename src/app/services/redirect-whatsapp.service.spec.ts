import { TestBed } from '@angular/core/testing';

import { RedirectWhatsappService } from './redirect-whatsapp.service';

describe('RedirectWhatsappService', () => {
  let service: RedirectWhatsappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectWhatsappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
