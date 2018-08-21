import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BodyModule} from './body/body.module';
import {RestService} from "./shared/rest.service";
import {HeaderModule} from "./header/header.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BodyModule,
    HeaderModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
