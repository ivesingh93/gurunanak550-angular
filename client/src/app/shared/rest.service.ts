import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  registerUrl = '/api/userRoutes/register';
  loginUrl = '/api/userRoutes/login';
  profileUrl = '/api/userRoutes/profile';
  authToken;
  user: User;

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post<User>(this.registerUrl, user);
  }

  loginUser(email, password) {
    return this.http.post<User>(this.loginUrl, {email: email, password: password});
  }

  storeUserData(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token;
    this.user = user;
  }

  getProfile(){
    const httpOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      })
    };

    console.log(httpOptions);
    return this.http.get(this.profileUrl, httpOptions);
  }

}
