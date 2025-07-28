import { Component, Input, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import {  ChartOptions, ChartDataset } from 'chart.js';
import { Estilo } from '../../types/estilos.widget';
import { PLATFORM_ID } from '@angular/core';

 
export enum TipoGrafica {
  Linea = 'line',
  Barra = 'bar',
  Dona = 'doughnut',
  Pastel = 'pie',
  Radar = 'radar',
  Polar = 'polarArea'
}

 
export interface DatosGrafica {
  titulo: string;
  subtitulo: string;
  etiquetas: string[];  
  conjuntosDatos: ChartDataset[];  
  tipo: TipoGrafica;
  estilo?: Estilo;
  claseTarjeta?: string;
}
@Component({
  selector: 'app-grafica',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent {
 
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() etiquetas: string[] = [];
  @Input() conjuntosDatos: ChartDataset[] = [];
  @Input() tipo: TipoGrafica = TipoGrafica.Linea;
  @Input() estilo: Estilo = Estilo.Predeterminado;
  @Input() claseTarjeta: string = '';

  esNavegador: boolean;

  constructor() {
    const platformId = inject(PLATFORM_ID);
    this.esNavegador = isPlatformBrowser(platformId);
  }

   
  get opcionesGrafica(): ChartOptions {
    const opciones: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true }
      }
    };
  
    const esCircular = [
      TipoGrafica.Dona,
      TipoGrafica.Pastel,
      TipoGrafica.Polar
    ].includes(this.tipo);
  
    if (!esCircular) {
      opciones.scales = {
        x: {},
        y: {
          ticks: {
            callback: (valor: any) => `$${valor}k`
          }
        }
      };
    }
  
    return opciones;
  }
  

  
  get clasesTarjeta(): string[] {
    const clases = ['widget', 'p-4', 'h-100', 'rounded-4'];

    if (this.estilo) {
      clases.push('variant-' + this.estilo);
    }

    if (this.claseTarjeta) {
      clases.push(this.claseTarjeta);
    }

    return clases;
  }
}
