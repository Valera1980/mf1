import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FederationOneModule } from './federation-one/federation-one.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FederationOneModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FederationOneModule]
})
export class AppModule { }
