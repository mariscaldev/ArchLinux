import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesPage } from './articles.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlesPage
  },
  {
    path: 'install',
    loadChildren: () => import('./install/install.module').then( m => m.InstallPageModule)
  },
  {
    path: 'bspwm',
    loadChildren: () => import('./bspwm/bspwm.module').then( m => m.BspwmPageModule)
  },
  {
    path: 'polybar',
    loadChildren: () => import('./polybar/polybar.module').then( m => m.PolybarPageModule)
  },
  {
    path: 'lightdm',
    loadChildren: () => import('./lightdm/lightdm.module').then( m => m.LightdmPageModule)
  },
  {
    path: 'grub-custom',
    loadChildren: () => import('./grub-custom/grub-custom.module').then( m => m.GrubCustomPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesPageRoutingModule {}
