import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolybarPageRoutingModule } from './polybar-routing.module';

import { PolybarPage } from './polybar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    PolybarPageRoutingModule,
  ],
  declarations: [PolybarPage],
})
export class PolybarPageModule {}
