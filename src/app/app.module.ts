import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { authInterceptorProviders } from "./core/interceptors/auth.interceptor";
import { AuthModule } from "./pages/auth/auth.module";
import { HomeComponent } from "./pages/home/home.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { CoreModule } from "./core/core.module";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    AuthModule,
    NzButtonModule,
    CommonModule
  ],
  providers: [ { provide: NZ_I18N, useValue: en_US }, authInterceptorProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
