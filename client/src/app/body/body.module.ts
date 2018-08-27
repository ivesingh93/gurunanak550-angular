import { NgModule } from '@angular/core';
import {BodyComponent} from './body.component';
import {GalleryComponent} from './gallery/gallery.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [BodyComponent, GalleryComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCz9W9fIt_Ls0Njoen7UayAku3HXU4JcI'
    }),
    CommonModule
  ],
  exports: [
    BodyComponent
  ]
})

export class BodyModule { }
