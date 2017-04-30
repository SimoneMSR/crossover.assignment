import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {BaseService} from "./base.service";
import {EventsService} from "./events.service";
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class UserService extends BaseService {

  constructor(private http : Http, eventsService : EventsService) {
  	super(eventsService);
  	this.url = this.baseUrl + "/user";
  }

    public login(username, password) : Observable<boolean>{
    	  	 return this.http.post(this.url + "/auth", 
  	 	{"username" : username , "password" : Md5.hashStr(password)}).do(response => {
  	 		var json = response.json();
  		 if(response.status ==200 && json.status === "success"){
  		 	localStorage.setItem("sessionId", json.sessionId);
  		 	this.eventsService.sessionIdUpdated.next(localStorage.getItem("sessionId"));
  		 	this.eventsService.isLogged.next(true);
  		 }else{
  		 	this.eventsService.isLogged.next(false);
  		 }
  	})
  	.map(response => response.json().status === "success")
  	.catch(this.serverError);

  }

  public logout() : Observable<boolean>{
  	return this.http.get(this.url + "/logout" +"?sessionId=" + this.sessionId ).do(response => {
  		if(response.status ==200)
  			this.eventsService.isLogged.next(false);
  	}).map(response => response.json().status === "success")
  	.catch(this.serverError);
  }

}
