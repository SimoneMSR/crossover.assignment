import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {BaseService} from "./base.service";

@Injectable()
export class VideoService extends BaseService{

  

  constructor(private http : Http) {
  	super(); 
  }



  public getAllVideos(){

  }

  public getVideo(){

  }

  public rateVideo(){

  }

}
