import { Component, OnInit } from '@angular/core';
import {RestService} from "../../../shared/rest.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  url: string;
  featuredImgURL: string;
  title: string;
  briefDescription: string;
  content: string;

  constructor(private restService: RestService) { }

  onSubmit(){
    let news = {
      url: this.url,
      featuredImgURL: this.featuredImgURL,
      title: this.title,
      briefDescription: this.briefDescription,
      content: this.content
    };

    this.restService.addNews(news)
      .subscribe(data => location.reload());

  }

}
