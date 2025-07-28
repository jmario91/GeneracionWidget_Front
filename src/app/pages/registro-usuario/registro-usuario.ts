import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-usuario.html',
  styleUrls: ['./registro-usuario.scss'],
})
export class RegistroUsuarioComponent implements OnInit {
  @Input() usuario?: Usuario;
  formulario: FormGroup;

  entidades = ['','CDMX', 'Jalisco', 'Nuevo León', 'Yucatán'];
  estatuses = ['','Alta', 'Baja'];
  hobbiesDisponibles = ['Leer', 'Deportes', 'Música', 'Viajar', 'Cine'];
  


ocupaciones = ['Estudiante', 'Empleado', 'Independiente', 'Desempleado', 'Jubilado', 'Otro'];
estadoCiviles = ['Soltero', 'Casado', 'Divorciado', 'Viudo', 'Unión libre'];
nivelesEducativos = ['Primaria', 'Secundaria', 'Preparatoria', 'Licenciatura', 'Maestría', 'Doctorado'];
idiomas = ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués', 'Otro'];

 
 
 

cargando = false;
  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private usuariosService: UsuariosService
  ) {
  
    this.formulario = this.fb.group({
  nombre: ['',  [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50)
  ]],
  apellidoPaterno: ['', [Validators.required,   Validators.maxLength(50)]],
  apellidoMaterno: ['', [Validators.required,   Validators.maxLength(50)]],
  estatus: ['Alta'],
  fechaNacimiento: [''],
  sexo: ['H', Validators.required],
  edad: [null, [Validators.required, Validators.min(0), Validators.max(120)]],
  entidad: [''],
  municipio: [''],
  colonia: [''],
  codigoPostal: [null],
  talla: [null, [Validators.required, Validators.min(0.5), Validators.max(3)]],
  peso: [null, [Validators.required, Validators.min(1), Validators.max(500)]],
  email: ['', [Validators.required, Validators.email]],
  
  aceptaTerminos: [false],
  ocupacion: [''],
  estadoCivil: [''],
  nivelEducativo: [''],
  idioma: [''] , 
  hobbies: [<string[]>[]],
      notasAdicionales: ['']
});

  }

  ngOnInit(): void {
    if (this.usuario) {
      const fechaISO = this.usuario.fechaNacimiento
        ? new Date(this.usuario.fechaNacimiento).toISOString().split('T')[0]
        : '';
      this.formulario.patchValue({
        ...this.usuario,
        fechaNacimiento: fechaISO
      });
    }
  }

  guardar(): void {
  if (this.formulario.invalid) {
    this.formulario.markAllAsTouched();
    return;
  }

  this.cargando = true;

  // Clonamos y transformamos el objeto
  const datosUsuario: Usuario = { ...this.formulario.value };
  datosUsuario.fechaNacimiento = this.formatearFechaISO(datosUsuario.fechaNacimiento);
  datosUsuario.edad = new Date().getFullYear() - new Date(datosUsuario.fechaNacimiento).getFullYear();

  // Validación de enums antes de enviar
  const enums = {
    sexo: ['H', 'M'],
    estatus: ['Alta', 'Baja'],
    idioma: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués', 'Otro']
  };

  if (!enums.sexo.includes(datosUsuario.sexo)) {
    console.warn('⚠️ Sexo no válido:', datosUsuario.sexo);
  }
  if (!enums.estatus.includes(datosUsuario.estatus)) {
    console.warn('⚠️ Estatus no válido:', datosUsuario.estatus);
  }
  if (datosUsuario.idioma && !enums.idioma.includes(datosUsuario.idioma)) {
    console.warn('⚠️ Idioma no válido:', datosUsuario.idioma);
  }

  // Limpieza de campos vacíos
  const datosLimpios = { ...datosUsuario } as Record<string, any>;
  Object.keys(datosLimpios).forEach((key) => {
    if (datosLimpios[key] === '' || datosLimpios[key] == null) {
      delete datosLimpios[key];
    }
  });

  // Crear o actualizar
  const callback = this.usuario
    ? this.usuariosService.actualizarUsuario(this.usuario._id!, datosLimpios as Usuario)
    : this.usuariosService.crearUsuario(datosLimpios as Usuario);

 
callback.subscribe({
  next: (res) => {
    this.cargando = false;
    this.activeModal.close(res);
  },
  error: (err) => {
    this.cargando = false;
    console.error('Error del backend:', err);

    if (err.status === 400 && err.error?.errores) {
      const erroresBackend = err.error.errores;

      // Recorre los errores del backend y asigna al formulario
      for (const campo in erroresBackend) {
        const control = this.formulario.get(campo);
        if (control) {
          control.setErrors({ backend: erroresBackend[campo] });
        }
      }
    } else {
      alert('Ocurrió un error inesperado');
    }
  }
});
}



  formatearFechaISO(fecha: string | Date): string {
  const d = new Date(fecha);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

  cancelar(): void {
    this.activeModal.dismiss('cancelado');  
  }

  toggleHobbie(hobbie: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const hobbies = this.formulario.value.hobbies || [];

    if (checked) {
      this.formulario.patchValue({ hobbies: [...hobbies, hobbie] });
    } else {
      this.formulario.patchValue({ hobbies: hobbies.filter((h: string) => h !== hobbie) });
    }
  }
}
