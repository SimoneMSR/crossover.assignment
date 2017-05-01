import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {EventsService} from "../events.service";
import { Router} from '@angular/router'; 
import {Observable} from 'rxjs/Rx';
 
@Injectable()
export class LoginGuard implements CanActivate{
	constructor(private eventsService : EventsService){
	}
	
	canActivate () : Observable<boolean> {
		return this.eventsService.isLogged.map((val) => {
			return val;
		}).catch(() => {
			return Observable.of(false);
		});
  }
}