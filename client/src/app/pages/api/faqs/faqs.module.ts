import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCheckboxModule,
  MatIconModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSortModule,
  MatTableModule, MatTreeModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FaqsComponent} from "./faqs.component";
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
  declarations: [FaqsComponent],
  exports: [FaqsComponent]
})
export class FaqsModule { }
