import { NgModule } from '@angular/core';
import {BodyComponent} from './body.component';
import {GalleryComponent} from './gallery/gallery.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [BodyComponent, GalleryComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BodyComponent
  ]
})

export class BodyModule { }
