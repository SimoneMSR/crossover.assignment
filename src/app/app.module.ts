import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {VideoService} from "./video.service";
import {UserService} from "./user.service";
import {EventsService} from "./events.service";
import {BaseService} from "./base.service";
import { VideoListComponent } from './video-list/video-list.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { VideoComponent } from './video/video.component';
import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';
import { DetailComponent } from './detail/detail.component';
import {Rating} from "ngx-rating";

import {LoginGuard} from "./core/login.guard";
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
{ path: 'list', component: VideoListComponent, canActivate : [LoginGuard]},
{ path: 'login' , component : LoginComponent },
{ path: 'single/:id' , component : DetailComponent , canActivate : [LoginGuard]}
]; 

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  VideoListComponent,
  NavigatorComponent,
  VideoComponent,
  ScrollTrackerDirective,
  DetailComponent,
  Rating,
  NotificationComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [BaseService, VideoService, UserService, EventsService, LoginGuard],
  entryComponents : [VideoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
