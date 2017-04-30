import { Component, OnInit,ViewChild, ViewContainerRef, ComponentFactoryResolver, ElementRef } from '@angular/core';
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
	@ViewChild('videocontainer', { read: ViewContainerRef }) container;
	constructor(private videoService : VideoService,
		private eventsService : EventsService,
		private viewContainerRef: ViewContainerRef,
		private componentFactoryResolver: ComponentFactoryResolver) { }

	ngOnInit() {
		this.fetchVideos();
		this.videoElements = [];
		this.videos = [];
		this.fetchVideosOnScrollToBottom();
	}

	fetchVideos(){
		this.videoService.getAllVideos().subscribe(videos => {
			this.videos=this.videos.concat(videos);
			var factory = this.componentFactoryResolver.resolveComponentFactory(VideoComponent);
			var element : VideoComponent;
			var ref ;
			for(let video of videos){
				ref = this.container.createComponent(factory);
				element = (<VideoComponent> ref.instance);
				this.videoElements.push(element.videoelement);
				element.src=video.url; 
				element.id=video._id; 
				element.playClicked.subscribe(video => {
					if(video.nativeElement.id != this.videoPlayingId){
						this.videoPlayingId = video.nativeElement.id;
						for(let el of this.videoElements)
							el.nativeElement.pause();
						video.nativeElement.play();
					}

				});
			}
			ref.changeDetectorRef.detectChanges();
		})
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
