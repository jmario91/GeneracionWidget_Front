import { Component } from '@angular/core';
import { Estilo} from '../../shared/types/estilos.widget';
import { GraficaComponent, DatosGrafica, TipoGrafica } from '../../shared/widgets/grafica/grafica.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-graficas',
  imports: [CommonModule,FormsModule, GraficaComponent
 
  ],
  templateUrl: './graficas.component.html',
  styleUrl: './graficas.component.scss'
})
export class GraficasComponent {
  estiloGeneral = Estilo.Oceano;

  graficas: DatosGrafica[] = [
    {
      titulo: 'Ventas Prueba',
      subtitulo: 'LÍNEAS',
      etiquetas: ['Ene', 'Feb', 'Mar', 'Abr'],
      conjuntosDatos: [
        { data: [25, 40, 35, 50], label: '2025', borderColor: '#3b82f6', tension: 0.4, fill: true }
      ],
      tipo: TipoGrafica.Linea,
      estilo: this.estiloGeneral
    },
    {
      titulo: 'Ventas Prueba',
      subtitulo: 'DONA',
      etiquetas: ['Producto A', 'Producto B', 'Producto C'],
      conjuntosDatos: [
        { data: [40, 35, 25], backgroundColor: ['#10b981', '#3b82f6', '#f97316'] }
      ],
      tipo: TipoGrafica.Dona,
      estilo: this.estiloGeneral
    },
    {
      titulo: 'Ventas Prueba',
      subtitulo: 'RADAR',
      etiquetas: ['Calidad', 'Velocidad', 'Soporte'],
      conjuntosDatos: [
        { label: 'Producto X', data: [80, 60, 70], backgroundColor: 'rgba(96, 165, 250, 0.2)', borderColor: '#60a5fa', fill: true }
      ],
      tipo: TipoGrafica.Radar,
      estilo: this.estiloGeneral
    },
    {
      titulo: 'Ventas Prueba',
      subtitulo: 'BARRAS',
      etiquetas: ['Ene', 'Feb', 'Mar', 'Abr'],
      conjuntosDatos: [
        { data: [25, 40, 35, 50], label: '2025', borderColor: '#3b82f6', tension: 0.4, fill: true }
      ],
      tipo: TipoGrafica.Barra,
      estilo: this.estiloGeneral
    },
    {
      titulo: 'Ventas Prueba',
      subtitulo: 'PASTEL',
      etiquetas: ['A', 'B', 'C', 'D'],
      conjuntosDatos: [
        { data: [25, 40, 35, 50], label: '2025', borderColor: '#3b82f6', tension: 0.4, fill: true }
      ],
      tipo: TipoGrafica.Pastel,
      estilo: this.estiloGeneral
    },
    {
      titulo: 'Ventas Prueba',
      subtitulo: 'POLAR',
      etiquetas: ['A', 'B', 'C', 'D'],
      conjuntosDatos: [
        { data: [25, 40, 35, 50], label: '2025', borderColor: '#3b82f6', tension: 0.4, fill: true }
      ],
      tipo: TipoGrafica.Polar,
      estilo: this.estiloGeneral
    }
  ];
}
