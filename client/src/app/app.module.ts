import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BodyModule} from './body/body.module';
import {RestService} from "./shared/rest.service";
import {HeaderModule} from "./header/header.module";
import { PlantationApprovalComponent } from './pages/plantation-approval/plantation-approval.component';
import { PlantationsModule } from './pages/plantations/plantations.module';
import {RouterModule, Routes} from "@angular/router";
import {PlantationsComponent} from "./pages/plantations/plantations.component";

const routes: Routes = [
  {path: 'plantations', component: PlantationsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PlantationApprovalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BodyModule,
    HeaderModule,
    PlantationsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
