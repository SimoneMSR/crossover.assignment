import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';
import {Rating } from "ngx-rating";

import { FormsModule } from '@angular/forms';

import {Router} from '@angular/router';

import {VideoService} from "../video.service";
import {EventsService} from "../events.service";

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    var eventService = new EventsService();
    var videoService = new VideoService(null,eventService);
    TestBed.configureTestingModule({
      declarations: [ VideoComponent, Rating],
      imports : [FormsModule],
      providers : [{ provide: Router },
      {provide : VideoService, useValue : videoService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
