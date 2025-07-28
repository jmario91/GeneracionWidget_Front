import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterOutlet  } from '@angular/router';

import { EncabezadoComponent } from '../shared/widgets/encabezado/encabezado.component';
import { SidebarComponent } from '../shared/widgets/sidebar/sidebar.component';
import { EnlaceMenu } from '../shared/types/enlace-menu';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, EncabezadoComponent, SidebarComponent,RouterOutlet ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
 
  mostrarMenuLateral = true;
 constructor() {
    console.log('LayoutComponent cargado');
  }
  
  encabezadoConfig = {
    nombreAplicacion: 'Mi Empresa',
    logoUrl: 'assets/logo.svg',
    usuario: {
      nombre: 'Gerardo Pike',
      rol: 'Administrador',
      imagenUrl: 'assets/img/Perfil1.png'
    }
  };
 
  enlacesLateral: EnlaceMenu[] = [
    { texto: 'Inicio', ruta: '/inicio', icono: 'home', seccion: 'Principal' },
    { texto: 'Gráficas', ruta: '/graficas', icono: 'show_chart', seccion: 'Principal' },
    { texto: 'Tablas', ruta: '/tablas', icono: 'table_chart', seccion: 'Principal' },
    { texto: 'Tarjetas Estadísticas', ruta: '/tarjetasEstadisticas', icono: 'bar_chart', seccion: 'Principal' } ,
    { texto: 'Registro Usuario', ruta: 'usuario/registro', icono: 'bar_chart', seccion: 'Principal' } 
  ];

 
  alternarMenu(): void {
    this.mostrarMenuLateral = !this.mostrarMenuLateral;
  }
 
  onTemaCambiado(valor: boolean): void {
    console.log('Tema cambiado:', valor ? 'Oscuro' : 'Claro');
  }

  onIdiomaCambiado(idioma: string): void {
    console.log('Idioma cambiado a:', idioma);
  }
}
