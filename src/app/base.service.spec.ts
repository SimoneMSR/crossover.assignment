import { TestBed, inject } from '@angular/core/testing';

import { BaseService } from './base.service';
import {EventsService} from "./events.service"; 

class MockEventService {

}

describe('BaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseService,
      	{provide : EventsService , useClass : EventsService}]
    });
  });

  it('should be loaded', inject([BaseService], (service: BaseService) => {
    expect(service).toBeTruthy();
  }));
});
