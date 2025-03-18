import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrubCustomPage } from './grub-custom.page';

const routes: Routes = [
  {
    path: '',
    component: GrubCustomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrubCustomPageRoutingModule {}
