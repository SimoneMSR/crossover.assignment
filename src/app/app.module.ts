import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {VideoService} from "./video.service";
import {UserService} from "./user.service";
import {BaseService} from "./base.service";
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
{ path: 'list', component: VideoListComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BaseService, VideoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
