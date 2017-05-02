import { Component, OnInit,ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
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
	@Input () singleColumn : boolean;
	@ViewChild('videocontainer') container : ElementRef;
	@Output() playClicked : EventEmitter<ElementRef>;
	constructor(private videoService : VideoService,
		private eventsService : EventsService) {
		this.playClicked = new EventEmitter<ElementRef>();
	}

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
		this.playClicked.emit(video);
		if(video.nativeElement.id != this.videoPlayingId){
			this.videoPlayingId = video.nativeElement.id;
			this.stopVideos();
			video.nativeElement.play();
		}
	}

	onScroll(event){
		console.log(event);
	}

	stopVideos(){
		for(let el of this.container.nativeElement.childNodes){
			if(el.tagName==="APP-VIDEO")					
				el.getElementsByTagName("video")[0].pause();
		}
	}

	fetchVideosOnScrollToBottom(){
		this.eventsService.scrolledToBottom.subscribe(hasScrolled => {
			if(hasScrolled){
				this.fetchVideos();
			}
		})
	}

}
