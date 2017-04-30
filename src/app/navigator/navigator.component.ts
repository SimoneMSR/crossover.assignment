import { Component, OnInit } from '@angular/core';
import {EventsService} from "../events.service";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

	public isLogged : boolean;
  constructor(private eventsService : EventsService,
  	private userService : UserService,
  	private router : Router) { }

  ngOnInit() {
  	this.setupObservables();
  }

  logout(){
  	this.userService.logout().subscribe(isLoggedOut => {
  		if(isLoggedOut)
  			this.router.navigate(['login']);
  	});

  }

  setupObservables(){
  	this.eventsService.isLogged.subscribe(islogged => {
  		this.isLogged = islogged;
  	});
  }

}
