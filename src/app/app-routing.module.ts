import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubirDocsComponent } from './components/subir-docs/subir-docs.component';
import { RecursosCompartidosComponent } from './components/recursos-compartidos/recursos-compartidos.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo:'/recursos', pathMatch: 'full' }, 
  { path: 'recursos', component: RecursosCompartidosComponent,  }, 
  { path: 'subirDocs', component: SubirDocsComponent, } ,
  { path: 'carrusel', component: CarouselComponent, },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

