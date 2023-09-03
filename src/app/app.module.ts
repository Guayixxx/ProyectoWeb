import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecursosCompartidosComponent } from './components/recursos-compartidos/recursos-compartidos.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SubirDocsComponent } from './components/subir-docs/subir-docs.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursosCompartidosComponent,
    CarouselComponent,
    SubirDocsComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
