import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {BodyModule} from './body/body.module';
import {RestService} from "./shared/rest.service";
import {HeaderModule} from "./header/header.module";
import { PlantationsModule } from './pages/plantations/plantations.module';
import {RouterModule, Routes} from "@angular/router";
import {PlantationsComponent} from "./pages/plantations/plantations.component";
import { AddResourceComponent } from './pages/api/add-resource/add-resource.component';
import {AddResourceModule} from "./pages/api/add-resource/add-resource.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QueriesComponent } from './pages/api/queries/queries.component';
import {QueriesModule} from "./pages/api/queries/queries.module";
import { FaqsComponent } from './pages/api/faqs/faqs.component';
import {FaqsModule} from "./pages/api/faqs/faqs.module";

const routes: Routes = [
  {path: 'plantations', component: PlantationsComponent},
  {path: 'add-resource', component: AddResourceComponent},
  {path: 'queries', component: QueriesComponent},
  {path: 'faqs', component: FaqsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BodyModule,
    NgbModule.forRoot(),
    HeaderModule,
    PlantationsModule,
    AddResourceModule,
    QueriesModule,
    FaqsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
