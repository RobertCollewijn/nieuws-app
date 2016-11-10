import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NieuwsItemsService} from "./services/nieuws-items.service";
import { NieuwsItemsComponent } from './components/nieuws-items/nieuws-items.component';
import {routing} from "./app.router";

@NgModule({
  declarations: [
    AppComponent,
    NieuwsItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [NieuwsItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
