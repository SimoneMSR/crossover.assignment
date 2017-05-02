import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs/Rx';
import {Video} from './video.model';

@Injectable()
export class EventsService {

public sessionIdUpdated : BehaviorSubject<string>;
public isLogged :BehaviorSubject<boolean>;
public scrolledToBottom : BehaviorSubject<boolean>;
public notifySuccess : BehaviorSubject<boolean>;
public videoPlayed : BehaviorSubject<Video>;
  constructor() {
  	this.sessionIdUpdated = new BehaviorSubject<string>(null);
  	this.isLogged = new BehaviorSubject<boolean>(false);
  	this.scrolledToBottom = new BehaviorSubject<boolean>(false);
  	this.notifySuccess = new BehaviorSubject<boolean>(false);
  	this.videoPlayed = new BehaviorSubject<Video>(null);
  }

}
