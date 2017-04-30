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

const routes: Routes = [
{ path: 'list', component: VideoListComponent},
{ path: 'login' , component : LoginComponent }
]; 

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  VideoListComponent,
  NavigatorComponent,
  VideoComponent,
  ScrollTrackerDirective
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule.forRoot(routes)
  ],
  providers: [BaseService, VideoService, UserService, EventsService],
  entryComponents : [VideoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
