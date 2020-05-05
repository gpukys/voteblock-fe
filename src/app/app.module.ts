import { SharedModule } from './../shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageModule } from './front-page/front-page.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

const appRoutes: Routes = [
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FrontPageModule,
    FlexLayoutModule,
    UserModule,
    AdminModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
