import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public username : string;
	public password : string;

  constructor(private userService : UserService,
  	private router : Router) { }

  ngOnInit() {
  }

  login(){
  	this.userService.login(this.username,this.password).subscribe(isLogged=>{
  		if(isLogged || true)
  			this.router.navigate(["/list"]);
  	});
  }

}
