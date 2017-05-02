import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { EventsService } from './events.service';
import { Http } from '@angular/http';

describe('UserService', () => {
  beforeEach(() => {
  	var eventsService = new EventsService();
    TestBed.configureTestingModule({
      providers: [UserService,
      {provide : Http},
      {provide : EventsService , useValue : eventsService}]
    });
  });

  it('should be loaded', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
