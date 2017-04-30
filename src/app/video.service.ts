import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {BaseService} from "./base.service";
import {EventsService} from "./events.service";
import {Video} from "./video.model";

@Injectable()
export class VideoService extends BaseService{

  
  constructor(private http : Http,
  	eventsService : EventsService) {
  	super(eventsService); 
  	this.url="/video";

  }



  public getAllVideos() : Observable<Video[]>{
  	return this.http.get(this.baseUrl + "/videos?sessionId=" + this.sessionId)
  	.map(response => <Video[]> response.json().data)
  	.catch(this.serverError);
  }

  public getVideo(){

  }

  public rateVideo(){

  }



}
