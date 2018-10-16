import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueriesComponent} from "./queries.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
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
    CdkTableModule,
    CdkTreeModule,
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
  declarations: [QueriesComponent],
  exports: [QueriesComponent]
})
export class QueriesModule { }
