import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FotosComponent} from './components/fotos/fotos.component';
import {CargaComponent} from './components/carga/carga.component';

const routes: Routes = [
  {path: 'fotos', component: FotosComponent},
  {path: 'carga', component: CargaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'carga'},
  {path: '', pathMatch: 'full', redirectTo: 'carga'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
