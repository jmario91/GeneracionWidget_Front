import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnlaceMenu } from '../../types/enlace-menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() enlaces: EnlaceMenu[] = [];
  @Input() abierto: boolean = true;
  @Input() nombreAplicacion: string = '';

  @Output() toggleMenu = new EventEmitter<void>();

  anioActual = new Date().getFullYear();

  agruparPorSeccion(): { [key: string]: EnlaceMenu[] } {
    const resultado: { [key: string]: EnlaceMenu[] } = {};
    for (const enlace of this.enlaces) {
      const seccion = enlace.seccion || 'Principal';
      if (!resultado[seccion]) {
        resultado[seccion] = [];
      }
      resultado[seccion].push(enlace);
    }
    return resultado;
  }
}
