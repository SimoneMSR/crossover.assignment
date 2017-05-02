import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import {EventsService} from "../events.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

	@ViewChild('notifications') notifications : ElementRef;
  constructor(
  	private renderer : Renderer,
  	private eventsService : EventsService) { }

  ngOnInit() {
  	this.eventsService.notifySuccess.subscribe(mustNotify => {
  		if(mustNotify){
  			let notification = this.renderer.createElement(this.notifications, "div");
  			this.renderer.setElementClass(notification, "notification",true);
  			this.renderer.setElementClass(notification, "ion-checkmark-circled",true);
  			this.renderer.projectNodes(this.notifications,[notification]);
  		}
  	})
  }

}
