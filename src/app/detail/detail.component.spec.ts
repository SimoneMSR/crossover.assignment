import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { VideoComponent } from '../video/video.component';
import {  VideoListComponent} from '../video-list/video-list.component';
import {  Video} from '../video.model';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import {ActivatedRoute} from "@angular/router";
import {Observable} from 'rxjs/Rx';
import { RouterTestingModule } from '@angular/router/testing';

import {VideoService} from "../video.service";
import {EventsService} from "../events.service";

import {Rating} from "ngx-rating";

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    var activatedRoutes = new ActivatedRoute();
    activatedRoutes.params = Observable.of({});
    TestBed.configureTestingModule({
      declarations: [Rating,
      DetailComponent,
      VideoListComponent,
      VideoComponent

      ],
      imports : [FormsModule, HttpModule, RouterTestingModule],
      providers : [VideoService, EventsService,
      {provide : ActivatedRoute, useValue : activatedRoutes}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a video', () => {
    component.video = new Video();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.getElementsByTagName("app-video").length).toBe(1);
  });
});
