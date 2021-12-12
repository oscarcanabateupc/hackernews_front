import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Contribution } from './contribution';

@Injectable({
  providedIn: 'root'
})
export class ContributionsService {

  contributions_url = 'https://stark-taiga-62759.herokuapp.com/contributions.json';

  constructor(private httpClient:HttpClient) { }


  get_news_entries(): Observable<Contribution[]>{
    return this.httpClient.get<Contribution[]>(this.contributions_url)
  }
}
