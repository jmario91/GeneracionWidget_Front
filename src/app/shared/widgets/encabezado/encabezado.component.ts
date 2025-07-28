import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  @Input() nombreAplicacion: string = 'Mi Empresa';
  @Input() logoUrl: string = 'assets/logo.svg';
  @Input() mostrarCarrito: boolean = true;
  @Input() enlacesMenu: { texto: string; ruta: string }[] = [];
  @Input() usuario: { nombre: string; rol: string; imagenUrl: string } | null = null;

  @Output() temaCambiado = new EventEmitter<boolean>();
  @Output() idiomaCambiado = new EventEmitter<string>();
  @Output() toggleMenu = new EventEmitter<void>();

  idiomaActual: string = 'ES';
  modoOscuro: boolean = false;
  mostrarMenuUsuario = false;
  mostrarModalBusqueda = false;
  esNavegador: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.esNavegador = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.usuario ??= {
      nombre: 'Usuario',
      rol: 'Invitado',
      imagenUrl: 'assets/img/default-user.png'
    };

    if (this.esNavegador) {
      this.modoOscuro = localStorage.getItem('modoOscuro') === 'true';
      this.idiomaActual = localStorage.getItem('idiomaActual') ?? 'ES';
      this.actualizarClaseTema();
    }
  }

  cambiarTema(): void {
    this.modoOscuro = !this.modoOscuro;
    localStorage.setItem('modoOscuro', String(this.modoOscuro));
    this.actualizarClaseTema();
    this.temaCambiado.emit(this.modoOscuro);
  }

  cambiarIdioma(): void {
    this.idiomaActual = this.idiomaActual === 'ES' ? 'EN' : 'ES';
    localStorage.setItem('idiomaActual', this.idiomaActual);
    this.idiomaCambiado.emit(this.idiomaActual);
  }

  private actualizarClaseTema(): void {
    if (this.esNavegador) {
      document.body.classList.toggle('dark-mode', this.modoOscuro);
    }
  }

  alternarSidebar(): void {
    this.toggleMenu.emit();
  }
}
