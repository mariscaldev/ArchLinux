import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title: string = 'ArchLinux';
  mostrarMenuResponsive: boolean = false;
  rutaActual: string = '';

  enlaces: { nombre: string; ruta: string; icono: string }[] = [
    { nombre: 'Inicio', ruta: '/home', icono: 'home-outline' },
    { nombre: 'Artículos', ruta: '/articles', icono: 'book-outline' },
  ];

  constructor(private router: Router, private menuCtrl: MenuController) {
    // Escuchar cambios en la ruta
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.rutaActual = event.urlAfterRedirects;
      });
  }

  ngOnInit() {
    this.checkScreenSize();
    this.rutaActual = this.router.url; // Establecer valor inicial
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.mostrarMenuResponsive = window.innerWidth <= 768;
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }

  navegarCerrarMenu(ruta: string) {
    this.router.navigate([ruta]).then(() => {
      this.menuCtrl.close('customMenu');
    });
  }

  esRutaActiva(ruta: string): boolean {
    return this.rutaActual === ruta;
  }
}
