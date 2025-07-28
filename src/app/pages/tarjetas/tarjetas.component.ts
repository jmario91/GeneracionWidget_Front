import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 import { Estilo} from '../../shared/types/estilos.widget';
import { DatosTarjeta, TarjetaEstadisticasComponent } from '../../shared/widgets/tarjeta-estadisticas/tarjeta-estadisticas.component';


@Component({
  selector: 'app-tarjetas',
  imports: [ CommonModule,  FormsModule, TarjetaEstadisticasComponent,],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.scss'
})
export class TarjetasComponent {

  estiloGeneral = Estilo.Oceano;

  tarjetas: DatosTarjeta[] = [
    {
      titulo: 'Tráfico',
      valor: '350,897',
      icono: 'account_balance',
      tipoIcono: 'material',
      claseFondoIcono: 'icon-bg-danger',
      subtitulo: 'Mes pasado',
      cambioSubtitulo: '3.48%',
      direccionCambioSubtitulo: 'down',
      colorCambioSubtitulo: 'text-warning',
      estilo: this.estiloGeneral,
      claseTarjeta: ''
    },
    {
      titulo: 'Ingresos',
      valor: '$12,345',
      icono: 'face',
      tipoIcono: 'material',
      claseFondoIcono: 'icon-bg-warning',
      subtitulo: 'Objetivo Mensual',
      cambioSubtitulo: '2.15%',
      direccionCambioSubtitulo: 'down',
      colorCambioSubtitulo: 'text-warning',
      estilo: this.estiloGeneral,
      claseTarjeta: ''
    },
    {
      titulo: 'Nuevos Usuarios',
      valor: 128,
      icono: 'group',
      tipoIcono: 'material',
      claseFondoIcono: 'icon-bg-info',
      subtitulo: 'Esta semana',
      cambioSubtitulo: '5.90%',
      direccionCambioSubtitulo: 'up',
      colorCambioSubtitulo: 'text-success',
      estilo: this.estiloGeneral,
      claseTarjeta: ''
    }
  ];
}
