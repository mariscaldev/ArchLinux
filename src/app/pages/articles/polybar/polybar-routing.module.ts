import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolybarPage } from './polybar.page';

const routes: Routes = [
  {
    path: '',
    component: PolybarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolybarPageRoutingModule {}
