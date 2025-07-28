import { Component, Input,Output,EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Estilo } from '../../types/estilos.widget';

export interface DatosContacto {
  nombre: string;
  correo: string;
  imagen: string;
  contactosRelacionados: string[];  
  activo?: boolean;
  estilo?: Estilo;
  claseTarjeta?: string;
}

@Component({
  selector: 'app-tarjeta-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-contacto.component.html',
  styleUrls: ['./tarjeta-contacto.component.scss']
})
export class TarjetaContactoComponent {
  @Input() datos!: DatosContacto;

  @Output() verPerfil = new EventEmitter<void>();
  @Output() contactar = new EventEmitter<void>();
  @Output() contactoSeleccionado = new EventEmitter<string>();

  
  get clasesTarjeta(): string[] {
    const clases = ['widget'];
    if (this.datos.estilo !== undefined) {
      clases.push('variant-' + this.datos.estilo);
    }
    if (this.datos.claseTarjeta) {
      clases.push(this.datos.claseTarjeta);
    }
    return clases;
  }

  
  onVerPerfil() {
    this.verPerfil.emit();
  }

  onContactar() {
    this.contactar.emit();
  }

  onSeleccionarContacto(contacto: string) {
    this.contactoSeleccionado.emit(contacto);
  }

  
}
