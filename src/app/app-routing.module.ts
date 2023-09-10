import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { InicialComponent } from './perfil/inicial/inicial.component';

const routes: Routes = [
  {path: "", redirectTo:'/inicial', pathMatch:'full'},
  {path: "inicial", component: InicialComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
