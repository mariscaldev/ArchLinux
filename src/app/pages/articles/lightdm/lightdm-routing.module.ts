import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightdmPage } from './lightdm.page';

const routes: Routes = [
  {
    path: '',
    component: LightdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightdmPageRoutingModule {}
