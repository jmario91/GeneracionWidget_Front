import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Usuario } from '../../../models/usuario.model';
import { UsuariosService } from '../../../services/usuarios.service';
import { ModalService } from '../../../core/modal/modal.service';
import { RegistroUsuarioComponent } from '../../../pages/registro-usuario/registro-usuario';
import Swal from 'sweetalert2';
import { AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  displayedColumns: string[] = [
    'avatar',
    'apellidoPaterno',
    'apellidoMaterno',
    'entidad',
    'sexo',
    'email',
    'estatus',
    'acciones'
  ];

  dataSource = new MatTableDataSource<Usuario>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private usuariosService: UsuariosService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  cargarUsuarios(): void {
    this.usuariosService.obtenerUsuarios().subscribe({
      next: (res: any) => {
        this.dataSource.data = res.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log('Usuarios cargados:', this.dataSource.data);
      },
      error: (err) => console.error('Error al cargar usuarios:', err)
    });
  }
  applyFilter(event: Event): void {
    const valor = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = valor;
  }


  abrirModal(): void {
    const modalRef = this.modalService.abrir(RegistroUsuarioComponent, {
      size: 'xl',
      centered: true,
      scrollable: true,
      backdrop: 'static'
    });

    modalRef.result
      .then((usuario: Usuario) => {
        if (usuario) this.cargarUsuarios();
      })
      .catch(() => console.log('Registro cancelado'));
  }
  eliminarUsuario(usuario: Usuario): void {
    Swal.fire({
      title: '¿Eliminar usuario?',
      text: `Eliminarás a ${usuario.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataSource.data = this.dataSource.data.filter(u => u !== usuario);
        Swal.fire('Eliminado', 'El usuario ha sido eliminado.', 'success');
      }
    });
  }

  editarUsuario(usuario: Usuario): void {
    const modalRef = this.modalService.abrir(RegistroUsuarioComponent, {
      size: 'xl',
      centered: true,
      backdrop: 'static'
    });

    modalRef.componentInstance.usuario = { ...usuario };

    modalRef.result
      .then((usuarioActualizado: Usuario) => {
        if (!usuarioActualizado || !usuarioActualizado._id) return;

        const nuevaLista = this.dataSource.data.map(u =>
          u._id === usuarioActualizado._id ? usuarioActualizado : u
        );
        console.log('Usuario actualizado:', usuarioActualizado);
        this.dataSource.data = nuevaLista;
        console.log('Usuario actualizado NUEVA LISTA:', this.dataSource.data);

        this.cargarUsuarios();
      })
      .catch(() => { });
  }



}
