import { TestBed } from '@angular/core/testing';

import { ServiceReportService } from './service-report.service';

describe('ServiceReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceReportService = TestBed.get(ServiceReportService);
    expect(service).toBeTruthy();
  });
});
