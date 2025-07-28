import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Estilo } from '../../types/estilos.widget';

export interface DocumentoCheck {
  id: string;
  label: string;
  checked: boolean;
  requiereTexto?: boolean;
  observacion?: string;
}

@Component({
  selector: 'app-checklist-documentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-list-documentos.component.html',
  styleUrls: ['./check-list-documentos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChecklistDocumentosComponent implements OnChanges {
  @Input() titulo: string = 'Check List Documentos Pago de Servicios';
  @Input() documentos: DocumentoCheck[] = [];
  @Input() estilo: Estilo = Estilo.Predeterminado;
  @Input() mostrarBotones: boolean = true;
  @Input() claseTarjeta: string = '';
  @Input() limiteActivarScroll: number = 6;
  @Input() filasPorColumna: number = 8;

  private _documentosMemo: DocumentoCheck[][] = [];

  ngOnChanges(): void {
    this.recalcularColumnas();
  }

  private recalcularColumnas(): void {
    const columnas: DocumentoCheck[][] = [];
    for (let i = 0; i < this.documentos.length; i += this.filasPorColumna) {
      columnas.push(this.documentos.slice(i, i + this.filasPorColumna));
    }
    this._documentosMemo = columnas;
  }

  get documentosPorColumna(): DocumentoCheck[][] {
    return this._documentosMemo;
  }

  guardar() {
    const seleccionados = this.documentos
      .filter(item => item.checked)
      .map(item => ({
        id: item.id,
        label: item.label,
        observacion: item.requiereTexto ? item.observacion || '' : undefined
      }));

    console.log('Seleccionados con texto:', seleccionados);
  }

  cancelar() {
    this.documentos.forEach(item => {
      item.checked = false;
      if ('observacion' in item) item.observacion = '';
    });
    this.recalcularColumnas(); // por si necesitas que se refresque visualmente
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

  get claseBotonGuardar(): string {
    switch (this.estilo) {
      case Estilo.Oceano:
        return 'btn btn-info';
      case Estilo.Tecnologia:
        return 'btn btn-dark';
      case Estilo.Relleno:
        return 'btn btn-success';
      case Estilo.Minimalista:
      case Estilo.MinimalistaObscuro:
        return 'btn btn-outline-secondary';
      case Estilo.Predeterminado:
      default:
        return 'btn btn-primary';
    }
  }

  get claseEncabezado(): string {
    return `encabezado-${this.estilo}`;
  }

  get usarScroll(): boolean {
    return this.documentos.length > this.limiteActivarScroll;
  }

  trackByIndex(index: number): number {
    return index;
  }

  trackByDocumento(index: number, doc: DocumentoCheck): string {
    return doc.id;
  }
}
