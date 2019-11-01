import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {HttpClientModule} from '@angular/common/http';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { BarNavComponent } from './bar-nav/bar-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    CatalogueComponent,
    BarNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
