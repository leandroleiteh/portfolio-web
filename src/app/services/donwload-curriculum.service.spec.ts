import { TestBed } from '@angular/core/testing';

import { DonwloadCurriculumService } from './donwload-curriculum.service';

describe('DonwloadCurriculumService', () => {
  let service: DonwloadCurriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonwloadCurriculumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
