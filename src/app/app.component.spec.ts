import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';

import {BaseService} from "./core/services/base.service"; 
import {VideoService} from "./core/services/video.service"; 
import {EventsService} from "./core/services/events.service"; 
import {UserService} from "./core/services/user.service"; 

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigatorComponent,
        LoginComponent,
        NotificationComponent
      ],
      imports : [FormsModule,
      
      RouterTestingModule.withRoutes([
         { path: 'login', component: LoginComponent },
        ])
      ],
      providers : [
              { provide : BaseService},
              { provide : VideoService},
              { provide : EventsService},
              { provide : UserService}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
