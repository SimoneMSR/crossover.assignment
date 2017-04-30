import { Directive, HostListener } from '@angular/core';
import {EventsService} from "../events.service";

@Directive({
	selector: '[appScrollTracker]'
})
export class ScrollTrackerDirective {

	constructor(private eventService : EventsService) {
		var self=this;
		document.addEventListener('scroll', function (event) {
			if (document.body.scrollHeight === 
				document.body.scrollTop +        
				window.innerHeight) {
				self.eventService.scrolledToBottom.next(true);
		}
	});
	}

}