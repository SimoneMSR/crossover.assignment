import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorComponent } from './navigator.component';

import {EventsService} from "../events.service"; 
import {UserService} from "../user.service"; 
import {Router} from '@angular/router';

describe('NavigatorComponent', () => {
  let component: NavigatorComponent;
  let fixture: ComponentFixture<NavigatorComponent>;

  beforeEach(async(() => {
    var eventsService = new EventsService();
    TestBed.configureTestingModule({
      declarations: [ NavigatorComponent ],
      providers : [
      { provide : EventsService , useValue : eventsService},
      { provide: UserService   },
      { provide: Router }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
