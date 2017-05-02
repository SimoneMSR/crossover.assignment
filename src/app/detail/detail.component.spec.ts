import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { VideoComponent } from '../video/video.component';
import {  VideoListComponent} from '../video-list/video-list.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import {ActivatedRoute} from "@angular/router";
import {Observable} from 'rxjs/Rx';

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
       imports : [FormsModule, HttpModule],
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
});
