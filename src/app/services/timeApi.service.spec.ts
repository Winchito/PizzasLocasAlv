/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimeApiService } from './timeApi.service';

describe('Service: TimeApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeApiService]
    });
  });

  it('should ...', inject([TimeApiService], (service: TimeApiService) => {
    expect(service).toBeTruthy();
  }));
});
