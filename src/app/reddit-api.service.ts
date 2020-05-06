import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from './Interfaces/RootObject';


@Injectable({
  providedIn: 'root'
})

export class RedditAPIService {
  apiUrl = 'https://www.reddit.com/r/aww/.json';

  constructor(private http:HttpClient)  { }

  getPosts() {
    return this.http.get<RootObject>(this.apiUrl)
  }
}
