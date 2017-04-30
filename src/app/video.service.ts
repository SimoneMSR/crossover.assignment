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



	public getAllVideos(skip? :number, limit? :number) : Observable<Video[]>{
		var options = VideoService.getFormData({"skip" : skip, "limit" :limit});
		return this.http.get(this.baseUrl + "/videos?sessionId=" + this.sessionId +"&" 
			+ options)
		.map(response => <Video[]> response.json().data)
		.catch(this.serverError);
	}

	public getVideo(videoId : string) : Observable<Video>{
		return this.http.get(this.baseUrl + "/video?sessionId=" + this.sessionId +"&" 
			+ "videoId=" + videoId)
		.map(response => <Video> response.json().data)
		.catch(this.serverError);
	}

	public rateVideo(videoId : string, rating : number) : Observable<boolean>{
		return this.http.post(this.baseUrl + "/video/ratings?sessionId=" + this.sessionId,
			{"videoId" : videoId, "rating" : rating})
		.map(response => response.json().status === 'success')
		.catch(this.serverError);

	}

	private static getFormData(object) {
		return Object.keys(object).map(function(k) {
			return encodeURIComponent(k) + "=" + encodeURIComponent(object[k]);
		}).join('&');
	}



}
