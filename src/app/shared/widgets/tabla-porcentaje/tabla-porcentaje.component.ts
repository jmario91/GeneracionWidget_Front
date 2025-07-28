import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Estilo } from '../../types/estilos.widget';

 

export enum TipoTendencia {
  Arriba = 'up',
  Abajo = 'down'
 }


export interface ColumnaTabla {
  clave: string;
  nombre: string;
}

export interface RegistroTabla {
  [clave: string]: any;
  tendencia?: TipoTendencia;
}

@Component({
  selector: 'app-tabla-porcentaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla-porcentaje.component.html',
  styleUrls: ['./tabla-porcentaje.component.scss']
})
export class TablaPorcentajeComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() registros: RegistroTabla[] = [];
  @Input() columnas: ColumnaTabla[] = [];
  @Input() mostrarBoton: boolean = false;
  @Input() estilo: Estilo= Estilo.Predeterminado ;
  @Input() claseTarjeta: string = '';
 

  registrosFiltrados: RegistroTabla[] = [];
  textoBusqueda: string = '';
  paginaActual: number = 1;
  elementosPorPagina: number = 3;

  ngOnInit() {
    this.aplicarFiltro();
  }

  aplicarFiltro() {
    const filtrados = this.registros.filter(reg =>
      Object.values(reg).some(valor =>
        valor?.toString().toLowerCase().includes(this.textoBusqueda.toLowerCase())
      )
    );
    this.registrosFiltrados = filtrados.slice(
      (this.paginaActual - 1) * this.elementosPorPagina,
      this.paginaActual * this.elementosPorPagina
    );
  }

  cambiarPagina(siguiente: boolean) {
    const maxPagina = Math.ceil(this.registros.length / this.elementosPorPagina);
    this.paginaActual += siguiente ? 1 : -1;
    this.paginaActual = Math.max(1, Math.min(this.paginaActual, maxPagina));
    this.aplicarFiltro();
  }

  get clasesTarjeta(): string[] {
    const clases = ['widget'];
    if (this.estilo) {
      clases.push('variant-' + this.estilo);
    }
    if (this.claseTarjeta) {
      clases.push(this.claseTarjeta);
    }
    return clases;
  }

  tieneColumnaTendencia(): boolean {
    return this.registros.some(r => r.tendencia !== undefined);
  }
  
}
