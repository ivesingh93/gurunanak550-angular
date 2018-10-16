import { Component, OnInit } from '@angular/core';
import {RestService} from "../../../shared/rest.service";

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {

  categories: string[];
  selectedCategory: string;
  resourceURL: string;
  resourceTitle: string;
  resourceDescription: string;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getResourceCategories()
      .subscribe(categories => this.extractCategories(categories));
  }

  onSubmit(){
    console.log(this.selectedCategory);
    console.log(this.resourceTitle);
    console.log(this.resourceDescription);
    console.log(this.resourceURL);

    let resource = {
      selectedCategory: this.selectedCategory,
      resourceTitle: this.resourceTitle,
      resourceDescription: this.resourceDescription,
      resourceURL: this.resourceURL
    };

    this.restService.addResource(resource)
      .subscribe(data => console.log(data));
  }

  private extractCategories(categories){
    this.categories = categories;
  }

}
