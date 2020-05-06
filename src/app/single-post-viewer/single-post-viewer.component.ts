import { Component, OnInit, Input } from '@angular/core';
import { RedditAPIService } from '../reddit-api.service';
import { RootObject, Child } from '../Interfaces/RootObject';


@Component({
  selector: 'app-single-post-viewer',
  templateUrl: './single-post-viewer.component.html',
  styleUrls: ['./single-post-viewer.component.css']
})
export class SinglePostViewerComponent implements OnInit {
  @Input() post:Child
  posts:RootObject;
  constructor(private rapiService: RedditAPIService) { }

  ngOnInit(): void {
    this.rapiService.getPosts().subscribe(
      (data: RootObject)=> this.posts = { ...data },
      error => console.error(error)
    )
  }

}

