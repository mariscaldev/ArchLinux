import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  // Definir una lista de imágenes con sus nombres y rutas
  images = [{ src: 'assets/background/arch1.png' }];
  constructor() {}

  ngOnInit() {}
}
