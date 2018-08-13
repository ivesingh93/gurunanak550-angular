import { NgModule } from '@angular/core';
import {BodyComponent} from './body.component';
import {GalleryComponent} from './gallery/gallery.component';

@NgModule({
  declarations: [BodyComponent, GalleryComponent],
  exports: [
    BodyComponent
  ]
})

export class BodyModule { }
