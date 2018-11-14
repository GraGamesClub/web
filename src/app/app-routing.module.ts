import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopComponent} from './core/components';

const routes: Routes = [
  {
    path: '',
    component: TopComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', scrollOffset: [0, 64] })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
