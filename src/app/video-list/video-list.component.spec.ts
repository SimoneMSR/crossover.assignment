import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListComponent } from './video-list.component';
import { VideoComponent } from '../video/video.component';
import { Video } from '../video.model';

import {Rating} from "ngx-rating";

import {FormsModule} from '@angular/forms'; 
import {Router} from '@angular/router'; 
import { RouterTestingModule } from '@angular/router/testing';

import {EventsService} from "../events.service";
import {VideoService} from "../video.service";
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async(() => {
    //var http = new Http();
    //var router = new Router(null,null,null,null,null,null);
    var eventService= new EventsService();
    var videoService = new VideoService(null,eventService);
    TestBed.configureTestingModule({
      declarations: [ Rating,
      VideoListComponent,
      VideoComponent ],
      imports : [FormsModule, HttpModule, RouterTestingModule],
      providers : [VideoService,
      {provide : EventsService, useValue : eventService} ,
      { provide: XHRBackend, useClass: MockBackend }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains videos', () => {
    var videos = []
    for(let i=0; i<10;i++)
      videos.push(new Video);
    component.videos = videos;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.nativeElement.getElementsByTagName("app-video").length).toBe(10);
    });
  });
});
