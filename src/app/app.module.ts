import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppHeader} from "./header/header.component";
import {AppNavbar} from "./navbar/navbar.component";
import {AppFooter} from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppNavbar,
    AppFooter
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
