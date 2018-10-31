import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsComponent} from "./news.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCheckboxModule,
  MatIconModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSortModule,
  MatTableModule, MatTreeModule
} from "@angular/material";
import {BrowserAnimationsModule} from "../../../../../node_modules/@angular/platform-browser/animations";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSortModule,
    MatTreeModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    MatRadioModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  declarations: [NewsComponent],
  exports: [NewsComponent]
})
export class NewsModule { }
