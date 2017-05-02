import { Component, OnInit , Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Router} from "@angular/router";
import {Video} from "../video.model";
import {VideoService} from "../video.service";
import {EventsService} from "../events.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

@ViewChild('videoelem') videoelement:ElementRef;

	_video : Video;
	@Input('video')
		get video() : Video{
			return this._video;
		};
		set video(value){
			this._video=value;
			if(value != null){
				if(this.videoelement != undefined)
					this.videoelement.nativeElement.load();
				this.rating= VideoComponent.average(this.video.ratings);
			}
		}

	@Input() ignoreClick : boolean;
	@Output() playClicked : EventEmitter<ElementRef>;
	@Input () hideDescription : boolean;
	public rating : number;
  constructor(private router : Router,
  		private videoService : VideoService,
  		private eventsService : EventsService) {
  	this.playClicked = new EventEmitter<ElementRef>();
  }

  ngOnInit() {
  	
  }

  startPlaying(){
  	this.playClicked.emit(this.videoelement);
  }

  openDetail(){
  	if(!this.ignoreClick)
  		this.router.navigate(['/single' , this.video._id]);
  }

  private static average(array : number[]){
  	return array.reduce( (p,c ) => p+c,0)/array.length;
  }

  rateVideo(){
  	this.videoService.rateVideo(this.video._id,this.rating).subscribe(updated => {
  		if(updated)
  			this.eventsService.notifySuccess.next(true);
  	})
  }
}
