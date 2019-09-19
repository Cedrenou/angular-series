import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Ng8CommonModule} from '@ng8/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng8CommonModule,
    BrowserAnimationsModule,
    Ng8CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
