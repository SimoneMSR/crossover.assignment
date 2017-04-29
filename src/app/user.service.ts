import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {BaseService} from "./base.service";
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class UserService extends BaseService {

  constructor(private http : Http) {
  	super();
  	this.url ="/user";
  }

    public login(username, password) : Observable<boolean>{
    	  	 return this.http.post(this.baseUrl + this.url + "/auth", 
  	 	{"username" : username , "password" : Md5.hashStr(password)}).do(response => {
  		 if(response.status ==200){
  		 	localStorage.setItem("sessionId", JSON.parse(response.text()).sessionId);
  		 }
  	})
  	.map(response => response.status==200)
  	.catch(this.serverError);

  }

  public logout(){

  }

}
