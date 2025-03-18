import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BspwmPage } from './bspwm.page';

const routes: Routes = [
  {
    path: '',
    component: BspwmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BspwmPageRoutingModule {}
