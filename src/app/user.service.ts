import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users_url = 'https://stark-taiga-62759.herokuapp.com/users.json';


  constructor(private httpClient:HttpClient) { }

  get_users(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.users_url)
  }


}
