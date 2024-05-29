import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarPorAnhoComponent } from './pages/validar-por-anho/validar-por-anho.component';
import { ValidarPorFechaComponent } from './pages/validar-por-fecha/validar-por-fecha.component';


const routes: Routes = [
  {
    path: 'validar-por-anho',
    component: ValidarPorAnhoComponent
  },{
    path: 'validar-por-fecha',
    component: ValidarPorFechaComponent
  },{
    path: '**',
    redirectTo: 'validar-por-fecha'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FechasFestivasRoutingModule {}
