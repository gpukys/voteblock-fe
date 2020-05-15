import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

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
    JwtModule.forRoot({
      config: {
        whitelistedDomains: ["example.com"],
        blacklistedRoutes: ["example.com/examplebadroute/"]
      }
    }),
    FrontPageModule,
    FlexLayoutModule,
    UserModule,
    AdminModule,
    SharedModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
