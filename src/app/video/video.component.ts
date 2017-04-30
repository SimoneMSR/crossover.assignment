import { Component, OnInit , Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

@ViewChild('videoelem') videoelement:ElementRef;
	@Input() src : string;
	@Input() id : string;
	@Output() playClicked : EventEmitter<ElementRef>;
  constructor() {
  	this.playClicked = new EventEmitter<ElementRef>();
  }

  ngOnInit() {
  }

  startPlaying(){
  	this.playClicked.emit(this.videoelement);
  }

}
