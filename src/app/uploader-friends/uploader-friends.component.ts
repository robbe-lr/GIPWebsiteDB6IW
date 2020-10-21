import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploader-friends',
  templateUrl: './uploader-friends.component.html',
  styleUrls: ['./uploader-friends.component.scss']
})
export class UploaderFriendsComponent implements OnInit {

 
  @Input() name: string;
  @Input() uid;
  
  isHovering: boolean;

  files: File[] = [];

  ngOnInit() {
    console.log(this.name)
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i=0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

}
