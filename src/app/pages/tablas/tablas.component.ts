import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablaPorcentajeComponent, RegistroTabla, TipoTendencia } from '../../shared/widgets/tabla-porcentaje/tabla-porcentaje.component';
import { Estilo} from '../../shared/types/estilos.widget';

@Component({
  selector: 'app-tablas',
   standalone: true,
   imports: [
     CommonModule,
     FormsModule,
     TablaPorcentajeComponent 
   ],
  templateUrl: './tablas.component.html',
  styleUrl: './tablas.component.scss'
})
export class TablasComponent {
  estiloGeneral = Estilo.Oceano;
 
    columnasTabla = [
      { clave: 'clave', nombre: 'Nombre' },
      { clave: 'visitantes', nombre: 'Visitantes' },
      { clave: 'usuarioUnicos', nombre: 'Usuarios Únicos' },
      { clave: 'porcentaje', nombre: 'Rebote' }
    ];
  
    registrosTabla: RegistroTabla[] = [
      { clave: 'Amazon', visitantes: 4569, usuarioUnicos: 340, porcentaje: '46,53%', tendencia: TipoTendencia.Arriba, estilo: this.estiloGeneral },
      { clave: 'Mercado Libre', visitantes: 3985, usuarioUnicos: 319, porcentaje: '46,53%', tendencia: TipoTendencia.Abajo, estilo: this.estiloGeneral },
      { clave: 'Facebook', visitantes: 3513, usuarioUnicos: 294, porcentaje: '36,49%', tendencia: TipoTendencia.Abajo, estilo: this.estiloGeneral },
      { clave: 'Instagram', visitantes: 2050, usuarioUnicos: 147, porcentaje: '50,87%', tendencia: TipoTendencia.Arriba, estilo: this.estiloGeneral },
      { clave: 'X (Twitter)', visitantes: 1795, usuarioUnicos: 190, porcentaje: '46,53%', tendencia: TipoTendencia.Abajo, estilo: this.estiloGeneral }
    ];
  

}
