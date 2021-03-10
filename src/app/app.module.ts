import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FederationOneModule } from './federation-one/federation-one.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxIpModule } from 'ngx-ip';
import { SocialLoginModule } from 'angularx-social-login';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FederationOneModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forChild(),
    ClipboardModule,
    NgxMaskModule.forChild(),
    FontAwesomeModule,
    NgxIpModule,
    SocialLoginModule,
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
