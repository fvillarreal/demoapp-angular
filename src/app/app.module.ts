import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './log/log.component';
import { LogDetailComponent } from './log-detail/log-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    LoginComponent,
    LogComponent,
    LogDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
