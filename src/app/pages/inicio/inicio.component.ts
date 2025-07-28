 import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
 import { Estilo} from '../../shared/types/estilos.widget';
 import { TarjetaContactoComponent, DatosContacto } from '../../shared/widgets/tarjeta-contacto/tarjeta-contacto.component';
import { ChecklistDocumentosComponent, DocumentoCheck } from '../../shared/widgets/check-list-documentos/check-list-documentos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    FormsModule,
    TarjetaContactoComponent,
    ChecklistDocumentosComponent 
],
  templateUrl: './inicio.component.html',
  styleUrls: []
})
export class InicioComponent {
  estiloGeneral = Estilo.Predeterminado;

     contactos: DatosContacto[] = [
    {
      nombre: 'Gerardo Pike',
      correo: 'pruebas@hotmail.com',
      imagen: 'person',
      contactosRelacionados: ['group', 'people', 'account_circle'],
      activo: true,
      estilo: this.estiloGeneral 
    }
  ];

  abrirPerfil() {
    console.log('Evento: abrirPerfil');
    
  }
  
  enviarMensaje() {
    console.log('Evento: enviarMensaje');
    
  }

  mostrarContactoRelacionado(contacto: string){
    console.log('Contacto relacionado clickeado',contacto);
  }

 
  
  documentos: DocumentoCheck[] = [
    { id: 'boletaPredial', label: 'Boleta predial', checked: false },
    { id: 'conexionAgua', label: 'Pago de derechos conexión de agua y drenaje', checked: false, requiereTexto: true },
    { id: 'certificados', label: 'Certificados', checked: false },
    { id: 'boletaAgua', label: 'Boleta agua', checked: false },
    { id: 'manifestacion', label: 'Manifestación catastral', checked: false },
    { id: 'reciboCFE', label: 'Recibo de luz o pantalla CFE', checked: false, requiereTexto: true } ,
    { id: 'conexionAgua2', label: 'Pago de derechos conexión de agua y drenaje', checked: false, requiereTexto: true },
    { id: 'certificados2', label: 'Certificados', checked: false },
    { id: 'boletaAgua2', label: 'Boleta agua', checked: false },
    { id: 'manifestacion2', label: 'Manifestación catastral', checked: false },
    { id: 'reciboCFE2', label: 'Recibo de luz o pantalla CFE', checked: false, requiereTexto: true } ,
    { id: 'conexionAgua22', label: 'Pago de derechos conexión de agua y drenaje', checked: false, requiereTexto: true },
    { id: 'certificados22', label: 'Certificados', checked: false },
    { id: 'boletaAgua22', label: 'Boleta agua', checked: false },
    { id: 'manifestacion22', label: 'Manifestación catastral', checked: false },
    { id: 'reciboCFE22', label: 'Recibo de luz o pantalla CFE', checked: false, requiereTexto: true } 
  ];
  

  

}