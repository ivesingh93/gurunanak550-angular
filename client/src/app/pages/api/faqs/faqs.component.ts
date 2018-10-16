import { Component, OnInit } from '@angular/core';
import {RestService} from "../../../shared/rest.service";

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent{

  question: string;
  answer: string;

  constructor(private restService: RestService) { }

  onSubmit(){
    this.restService.addQA(this.question, this.answer)
      .subscribe(data => location.reload());
  }

}
