import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../core/services/video.service";
import {Video} from "../core/video.model";
import {VideoListComponent} from "../video-list/video-list.component";
import {VideoComponent} from "../video/video.component";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	private id : string;
	public video : Video;
  @ViewChild('list')
    private listComponent : VideoListComponent;
      @ViewChild('videoelement')
    private videoelement : VideoComponent;
  constructor(private videoService : VideoService,
  	private route : ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.id= params['id'];
  		this.videoService.getVideo(this.id).subscribe(video => {
  			this.video=video;
  		})
  	})
  }

  stopListVideos(){
    this.listComponent.stopVideos();
  }

  stopVideo(){
    this.videoelement.stopVideo();
  }

}
