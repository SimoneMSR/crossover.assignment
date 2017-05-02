import { TestBed, inject } from '@angular/core/testing';

import { VideoService } from './video.service';
import { EventsService } from './events.service';
import { UserService } from './user.service';
import { Http } from '@angular/http';

describe('VideoService', () => {
    beforeEach(() => {
  	var eventsService = new EventsService();
    TestBed.configureTestingModule({
      providers: [VideoService,
      {provide : Http},
      {provide : EventsService , useValue : eventsService}]
    });
  });

  it('should be loaded', inject([VideoService], (service: VideoService) => {
    expect(service).toBeTruthy();
  }));
});
