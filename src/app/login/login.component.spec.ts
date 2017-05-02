import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import {UserService} from "../core/services/user.service"; 
import {EventsService} from "../core/services/events.service"; 
import {Router} from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    var eventService = new EventsService();
    var userService = new UserService(null,eventService);
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
      { provide: ComponentFixtureAutoDetect, useValue: true },
      { provide: UserService , useValue :  userService},
      { provide: Router }
      ],
      imports : [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
