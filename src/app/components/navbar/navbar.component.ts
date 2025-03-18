import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title: string = 'ArchLinux';

  // Agregar las rutas.
  enlaces: { nombre: string; ruta: string }[] = [
    { nombre: 'Inicio', ruta: '/home' },
    { nombre: 'Artículos', ruta: '/articles' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  // Navegacion de las rutas
  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}
