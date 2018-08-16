import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  registerUrl = 'http://localhost/api/userRoutes/register';

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    console.log(user);
    return this.http.post<User>(this.registerUrl, user);
  }
}
