import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('should have add function', inject([TestService], (service: TestService) => {
    expect(service.add).toBeTruthy();
  }));

  it('should  add correclty', inject([TestService], (service: TestService) => {
    let result: number = service.add(1, 2);
    expect(result).toEqual(3);
  }));
});
