import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { Sayfa1Component } from './components/sayfa1/sayfa1.component';
import { Sayfa2Component } from './components/sayfa2/sayfa2.component';
import { Sayfa3Component } from './components/sayfa3/sayfa3.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    Sayfa1Component,
    Sayfa2Component,
    Sayfa3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: Sayfa1Component
      },
      {
        path: "sayfa1",
        component: Sayfa1Component
      },
      {
        path: "sayfa2",
        component: Sayfa2Component
      },
      {
        path: "sayfa3",
        component: Sayfa3Component
      }
    ]),
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
