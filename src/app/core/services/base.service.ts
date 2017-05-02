import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {EventsService} from "./events.service";

@Injectable()
export class BaseService {

	protected baseUrl ="http://localhost:3000";
	protected sessionId : string;
	public static sessionIdStorageKey = "sessionId";
	protected url : string;
	protected eventsService : EventsService;
	constructor(eventsService : EventsService) {
		this.eventsService = eventsService;
		  		 	this.eventsService.sessionIdUpdated.next(localStorage.getItem(BaseService.sessionIdStorageKey));
  		this.setupObservables();
	}

	private setupObservables(){
		this.eventsService.sessionIdUpdated.subscribe(newSessionId => {
			this.sessionId=newSessionId;
		})
	}

	protected serverError(err: any) {
		console.log('sever error:', err);  // debug
		if(err instanceof Response) {
			return Observable.throw( err.json() || 'backend server error');
			// if you're using lite-server, use the following line
			// instead of the line above:
			//return Observable.throw(err.text() || 'backend server error');
		}
		return Observable.throw(err || 'backend server error');
	}

}
