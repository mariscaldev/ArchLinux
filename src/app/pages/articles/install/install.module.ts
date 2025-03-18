import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallPageRoutingModule } from './install-routing.module';

import { InstallPage } from './install.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    InstallPageRoutingModule,
  ],
  declarations: [InstallPage],
})
export class InstallPageModule {}
