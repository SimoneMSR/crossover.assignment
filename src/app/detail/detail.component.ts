import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../video.service";
import {Video} from "../video.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	private id : string;
	public video : Video;
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

}
