// src/app/core/modal/modal.service.ts
import { Injectable, Type } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modal: NgbModal) {}

  abrir<T>(componente: Type<T>, opciones: NgbModalOptions = {}): NgbModalRef {
    const defaultOptions: NgbModalOptions = {
      backdrop: 'static',
      centered: true,
      size: 'lg',
      scrollable: true,
      ...opciones,
    };

    return this.modal.open(componente, defaultOptions);
  }
}
