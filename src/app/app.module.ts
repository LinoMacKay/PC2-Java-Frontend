import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/material.module';
import { HomeComponent } from './core/home/home.component';
import { AppbarComponent } from './core/shared/appbar/appbar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AppbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
