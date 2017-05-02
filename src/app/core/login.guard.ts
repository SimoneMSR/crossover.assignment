import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {EventsService} from "../events.service";
import {BaseService} from "../base.service";
import { Router} from '@angular/router'; 
import {Observable} from 'rxjs/Rx';
 
@Injectable()
export class LoginGuard implements CanActivate{
	constructor(private eventsService : EventsService){
	}
	
	canActivate () : Observable<boolean> {
		return this.eventsService.isLogged.map((loggedIn) => {
			if(!loggedIn){
				return localStorage.getItem(BaseService.sessionIdStorageKey) != undefined;
			}
			return loggedIn;
		}).catch(() => {
			return Observable.of(false);
		});
  }
}