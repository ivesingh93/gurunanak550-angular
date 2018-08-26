import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PlantationsComponent} from "./plantations.component";
import {
  MatButtonModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatTreeModule,
  MatSelectModule, MatCheckboxModule, MatRadioModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AgmCoreModule } from '@agm/core';
import {SlideshowModule} from 'ng-simple-slideshow';


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
    SlideshowModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCz9W9fIt_Ls0Njoen7UayAku3HXU4JcI'
    }),
    CommonModule
  ],
  declarations: [PlantationsComponent],
  exports: [PlantationsComponent]
})
export class PlantationsModule { }
