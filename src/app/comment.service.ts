import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Contribution } from './contribution';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comment_url_1 = 'https://stark-taiga-62759.herokuapp.com/users/'
  comment_url_2 = '/show_comments.json'
  comment_upvote_url_1 = 'https://stark-taiga-62759.herokuapp.com/comments/'
  comment_upvote_url_2 = '/upvote'
  comment_unvote_url_1 = 'https://stark-taiga-62759.herokuapp.com/comments/'
  comment_unvote_url_2 = '/unvote'

  constructor(private httpClient:HttpClient) { }


  get_comments_user(id:number): Observable<Comment[]>{
    let finalUrl = this.comment_url_1 + id + this.comment_url_2 
    return this.httpClient.get<Comment[]>(finalUrl)
  }

  upvote_comment(id:number){
    let finalUrl = this.comment_upvote_url_1 + id + this.comment_upvote_url_2
    this.httpClient.post(finalUrl,"")
  }

  unvote_comment(id:number){
    let finalUrl = this.comment_unvote_url_1 + id + this.comment_unvote_url_2
    this.httpClient.post(finalUrl,"")
  }
}
