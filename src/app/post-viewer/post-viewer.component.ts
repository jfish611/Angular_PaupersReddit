import { Component, OnInit } from '@angular/core';
import { RedditAPIService } from '../reddit-api.service';
import { RootObject } from '../Interfaces/RootObject';

@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.css']
})
export class PostViewerComponent implements OnInit {
  posts:RootObject;
  constructor(private rapiService: RedditAPIService) { }

  ngOnInit(): void {
    this.rapiService.getPosts().subscribe(
      (data: RootObject)=> this.posts = { ...data },
      error => console.error(error)
    )
  }

}
