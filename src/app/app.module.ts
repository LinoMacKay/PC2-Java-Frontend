import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/material.module';
import { HomeComponent } from './core/home/home.component';
import { AppbarComponent } from './core/shared/appbar/appbar.component';
import { GastosComponent } from './core/gastos/gastos.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './core/gastos/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppbarComponent,
    GastosComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
