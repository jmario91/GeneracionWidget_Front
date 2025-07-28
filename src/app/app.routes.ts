import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { TablasComponent } from './pages/tablas/tablas.component';
 
import {TarjetasComponent} from './pages/tarjetas/tarjetas.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario';
import { UsuariosComponent } from './pages/tablas/usuarios/usuarios';
export const routes: Routes = [ 
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },  
      { path: 'inicio', component: InicioComponent },
      { path: 'graficas', component: GraficasComponent },
      { path: 'tablas', component: TablasComponent },
      { path: 'tarjetasEstadisticas', component: TarjetasComponent } ,
    {path: 'usuario/registro', component: UsuariosComponent},
    
    ]
  }
];
 