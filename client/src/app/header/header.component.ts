import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {RestService} from '../shared/rest.service';
import {User} from "../models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  closeResult: string;
  login_form: FormGroup;
  user: User;
  authToken;
  login: boolean = false;

  constructor(private modalService: NgbModal, private restService: RestService) { }

  ngOnInit() {
    this.createForm();
    this.restService.getProfile().subscribe(data => {
      this.user = new User(data['full_name'], data['email'], "", "", 0, data['address'], data['organization_name']);
      console.log(this.user);
      //this.login = true;
    })
  }

  createForm() {
    this.login_form = new FormGroup({
      email: new FormControl,
      password: new FormControl
    });
  }

  onLogin(loginContent){
    this.modalService.open(loginContent, {centered: true, size: 'sm'});
  }

  onSubmit(){
    console.log(this.login_form.value);
    this.restService.loginUser(this.login_form.value.email, this.login_form.value.password)
      .subscribe(data => {
        console.log(data);
        this.user = new User(data['full_name'], data['email'], "", "", 0, data['address'], data['organization_name']);
        this.restService.storeUserData(data['token'], this.user);
        this.login = true;
      });
  }


}
