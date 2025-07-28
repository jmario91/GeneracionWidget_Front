import { Component, Input } from '@angular/core';
import { NgIf, NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { Estilo } from '../../types/estilos.widget';

export type DireccionCambioSubtitulo = 'up' | 'down';
export type AlineacionHorizontal = 'inicio' | 'centrado' | 'final';
export type AlineacionVertical = 'arriba' | 'centrado' | 'abajo';
export type TipoIcono='material' | 'outlined'  ;
// ✅ Interfaz exportada correctamente
export interface DatosTarjeta {
  titulo: string;
  valor: string | number;
  icono: string;
  tipoIcono: TipoIcono;
  claseFondoIcono: string;
  subtitulo: string;
  cambioSubtitulo: string;
  direccionCambioSubtitulo: DireccionCambioSubtitulo;
  colorCambioSubtitulo: string;
  estilo: Estilo;
  claseTarjeta: string;
}

@Component({
  selector: 'app-tarjeta-estadisticas',
  standalone: true,
  imports: [NgIf, NgClass, NgSwitch, NgSwitchCase],
  templateUrl: './tarjeta-estadisticas.component.html',
  styleUrls: ['./tarjeta-estadisticas.component.scss']
})
export class TarjetaEstadisticasComponent {

  // ✅ Inputs correctamente tipados
  @Input() titulo: string = '';
  @Input() valor: string | number = '';
  @Input() icono: string = 'face';
  @Input() tipoIcono: TipoIcono = 'material';
  @Input() claseFondoIcono: string = 'bg-gradient-danger';
  @Input() subtitulo: string = '';
  @Input() cambioSubtitulo: string = '';
  @Input() direccionCambioSubtitulo: DireccionCambioSubtitulo = 'up';
  @Input() colorCambioSubtitulo: string = 'text-success';
  @Input() estilo: Estilo = Estilo.Predeterminado;
  @Input() claseTarjeta: string = '';
  @Input() alineacionH: AlineacionHorizontal = 'inicio';
  @Input() alineacionV: AlineacionVertical = 'arriba';

  obtenerClaseAlineacionHorizontal(): string {
    switch (this.alineacionH) {
      case 'inicio':
        return 'justify-content-start';
      case 'centrado':
        return 'justify-content-center';
      case 'final':
        return 'justify-content-end';
      default:
        return '';
    }
  }

  obtenerClaseAlineacionVertical(): string {
    switch (this.alineacionV) {
      case 'arriba':
        return 'align-items-start';
      case 'centrado':
        return 'align-items-center';
      case 'abajo':
        return 'align-items-end';
      default:
        return '';
    }
  }

  get clasesTarjeta(): string[] {
    const clases: string[] = ['widget'];

    if (this.estilo) {
      clases.push('variant-' + this.estilo);
    }

    if (this.claseTarjeta) {
      clases.push(this.claseTarjeta);
    }

    return clases;
  }

}
