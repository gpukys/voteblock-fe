import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageRoutingModule } from './front-page.routing.module';
import { FrontPageNavbarComponent } from './front-page-navbar/front-page-navbar.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { FrontPageComponent } from './front-page.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from 'src/shared.module';



@NgModule({
  declarations: [
    FrontPageNavbarComponent,
    MainComponent,
    AboutComponent,
    ClientsComponent,
    FrontPageComponent
  ],
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    SharedModule
  ]
})
export class FrontPageModule { }
