import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserService} from "../core/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public username : string;
	public password : string;
	@ViewChild('container') element:ElementRef;
  constructor(private userService : UserService,
  	private router : Router) { }

  ngOnInit() {
  }

  login(){
  	this.userService.login(this.username,this.password).subscribe(isLogged=>{
  		if(isLogged)
  			this.router.navigate(["/list"]);
  	});
  }

  stopWind(){
  	this.element.nativeElement.classList.add("slow");
  }

  flowWind(){
  	this.element.nativeElement.classList.remove("slow");
  }

}
