import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import * as _ from 'lodash';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './ui-components/primeng.module';

import { MsalGuard } from './services/msal/msal.guard';
import { MsalService } from './services/msal/msal.service';
import { BaseService } from './services/core/base.service';
import { GenericService } from './services/core/generic.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components/index';

import { MsalInterceptor } from './services/msal/msal.interceptor';
import { AuthInterceptor } from './services/auth/auth.interceptor';
import { NotifierModule } from 'angular-notifier';


@NgModule({
  declarations: _.concat(COMPONENTS, AppComponent),
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeNgModule,
    NgxSpinnerModule,
    NotifierModule
  ],
  providers: [
    MsalGuard,
    MsalService,
    BaseService,
    GenericService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
