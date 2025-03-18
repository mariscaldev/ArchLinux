import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [NavbarComponent, CarouselComponent, FooterComponent],
  imports: [CommonModule, IonicModule],
  exports: [NavbarComponent, CarouselComponent, FooterComponent],
})
export class ComponentsModule {}
