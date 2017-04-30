import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class EventsService {

public sessionIdUpdated : BehaviorSubject<string>;
public isLogged :BehaviorSubject<boolean>;
public scrolledToBottom : BehaviorSubject<boolean>;
  constructor() {
  	this.sessionIdUpdated = new BehaviorSubject<string>(null);
  	this.isLogged = new BehaviorSubject<boolean>(false);
  	this.scrolledToBottom = new BehaviorSubject<boolean>(false);
  }

}
