import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {RestService} from "../shared/rest.service";
import {User} from '../models/user.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  closeResult: string;
  signup_form: FormGroup;
  longitude: number = -77.234725;
  latitude: number = 39.0827175;
  locationsData = [];


  constructor(private modalService: NgbModal, private restService: RestService) { }

  ngOnInit() {
    this.createForm();
    this.restService.getLocations("Approved")
      .subscribe(locations => this.extractLocationsData(locations));
  }

  onSubmit() {
    console.log(this.signup_form.value);
    const user = new User(this.signup_form.value.fullName, this.signup_form.value.email, this.signup_form.value.password,
      this.signup_form.value.phoneNumber, this.signup_form.value.age, this.signup_form.value.address,
      this.signup_form.value.organizationName);
    console.log(user);
    this.restService.registerUser(user)
      .subscribe(data => console.log(data));
  }

  createForm() {
    this.signup_form = new FormGroup({
      fullName: new FormControl,
      email: new FormControl,
      password: new FormControl,
      phoneNumber: new FormControl,
      age: new FormControl,
      organizationName: new FormControl,
      address: new FormControl
    });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  private extractLocationsData(locations){
    this.locationsData = locations;
    for(let i = 0; i < this.locationsData.length; i++){
      this.locationsData[i]['longitude'] = Number(this.locationsData[i]['longitude']);
      this.locationsData[i]['latitude'] = Number(this.locationsData[i]['latitude']);
    }
  }

  clickedMarker(index: number) {
    console.log(this.locationsData[index]);
  }

}
