import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {VideoService} from "../video.service"; 
import {EventsService} from "../events.service"; 
import {Video} from "../video.model";
import {VideoComponent} from "../video/video.component";

@Component({
	selector: 'app-video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

	public videos : Video[];
	public videoElements : ElementRef[];
	public videoPlayingId : string;
	@ViewChild('videocontainer') container : ElementRef;
	constructor(private videoService : VideoService,
		private eventsService : EventsService) { }

	ngOnInit() {
		this.videoElements = [];
		this.videos = [];
		this.fetchVideos();
		this.fetchVideosOnScrollToBottom();
	}

	fetchVideos(){
		this.videoService.getAllVideos(this.videos.length,10).subscribe(videos => {
			this.videos=this.videos.concat(videos);
		})
	}

	videoPlayClicked(video){
		if(video.nativeElement.id != this.videoPlayingId){
			this.videoPlayingId = video.nativeElement.id;
			for(let el of this.container.nativeElement.childNodes){
				if(el.tagName==="APP-VIDEO")					
					el.getElementsByTagName("video")[0].pause();
			}
			video.nativeElement.play();
		}
	}

	onScroll(event){
		console.log(event);
	}

	fetchVideosOnScrollToBottom(){
		this.eventsService.scrolledToBottom.subscribe(hasScrolled => {
			if(hasScrolled){
				this.fetchVideos();
			}
		})
	}

}
