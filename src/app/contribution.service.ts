import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Contribution } from './contribution';

@Injectable({
  providedIn: 'root'
})
export class ContributionsService {

  contributions_url = 'https://stark-taiga-62759.herokuapp.com/contributions.json';
  contributions_user_1 = 'https://stark-taiga-62759.herokuapp.com/users/'
  contributions_user_2 = '/show_contributions.json'
  contributions_upvote_url_1 = 'https://stark-taiga-62759.herokuapp.com/contributions/'
  contributions_upvote_url_2 = '/upvote'
  contributions_unvote_url_1 = 'https://stark-taiga-62759.herokuapp.com/contributions/'
  contributions_unvote_url_2 = '/unvote'

  constructor(private httpClient:HttpClient) { }


  get_contributions(): Observable<Contribution[]>{
    return this.httpClient.get<Contribution[]>(this.contributions_url)
  }


  get_contributions_ask(): Observable<Contribution[]>{
    return this.httpClient.get<Contribution[]>(this.contributions_url + '/1.json')
  }

  get_contributions_user(id:number): Observable<Contribution[]>{
    let finalUrl = this.contributions_user_1 + id + this.contributions_user_2 
    return this.httpClient.get<Contribution[]>(finalUrl)
  }

  upvote_contribution(id:number){
    let finalUrl = this.contributions_upvote_url_1 + id + this.contributions_upvote_url_2
    this.httpClient.post(finalUrl,"")
  }

  unvote_contribution(id:number){
    let finalUrl = this.contributions_unvote_url_1 + id + this.contributions_unvote_url_2
    this.httpClient.post(finalUrl,"")
  }
}
