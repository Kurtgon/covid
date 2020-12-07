import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalComponent } from './components/global/global.component';
import { InformacionComponent } from './components/informacion/informacion.component';

const routes: Routes = [

  { path: '', redirectTo: '/global', pathMatch: 'full' },
  { path: 'global', component: GlobalComponent },
  { path:'countries', component: InformacionComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
