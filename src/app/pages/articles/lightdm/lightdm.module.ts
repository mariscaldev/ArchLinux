import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightdmPageRoutingModule } from './lightdm-routing.module';

import { LightdmPage } from './lightdm.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    LightdmPageRoutingModule,
  ],
  declarations: [LightdmPage],
})
export class LightdmPageModule {}
