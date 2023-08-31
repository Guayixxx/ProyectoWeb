import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecursosCompartidosComponent } from './components/recursos-compartidos/recursos-compartidos.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursosCompartidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
