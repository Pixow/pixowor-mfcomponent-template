import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TomtalkComponent } from './tomtalk/tomtalk.component';

@NgModule({
  declarations: [
    AppComponent,
    TomtalkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
