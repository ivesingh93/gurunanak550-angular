import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class RestService
{

  localhost = "http://localhost";
  locationsURL = this.localhost + '/api/userRoutes/plantationRecord/email=all&status=';
  registerUrl = this.localhost + '/api/userRoutes/register';
  loginUrl = this.localhost + '/api/userRoutes/login';
  profileUrl = this.localhost + '/api/userRoutes/profile';
  updatePlantationRecordURL = this.localhost + '/api/userRoutes/updatePlantationRecord';
  resourceCategoriesURL = this.localhost + "/api/userRoutes/resourceCategories";
  addResourceURL = this.localhost + "/api/userRoutes/addResource";
  authToken;
  user: User;

  constructor(private http: HttpClient) { }

  getLocations(status: string){
    return this.http.get(this.locationsURL + status);
  }

  getResourceCategories(){
    return this.http.get(this.resourceCategoriesURL);
  }

  addResource(resource){
    return this.http.post(this.addResourceURL, resource);
  }

  updatePlantationRecord(plantation_id: number, approved: boolean){
    return this.http.post(this.updatePlantationRecordURL, {
      plantation_id: plantation_id,
      approved: approved
    });
  }

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
