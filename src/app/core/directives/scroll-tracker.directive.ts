import { Directive, HostListener, ViewContainerRef } from '@angular/core';
import {EventsService} from "../services/events.service";

@Directive({
	selector: '[appScrollTracker]' 
})
export class ScrollTrackerDirective {

	constructor(private eventService : EventsService,
		private ref : ViewContainerRef) {
		var self=this;
		var element = <any> this.ref;
		element._data.renderElement.addEventListener('scroll', function (event) {
			if (event.target.scrollHeight === 
				event.target.scrollTop +        
				window.innerHeight) {
				self.eventService.scrolledToBottom.next(true);
		}
	});
	}

}