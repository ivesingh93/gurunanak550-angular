import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddResourceComponent} from "./add-resource.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCheckboxModule,
  MatIconModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSortModule,
  MatTableModule, MatTreeModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
  declarations: [AddResourceComponent],
  exports: [AddResourceComponent]
})
export class AddResourceModule { }
