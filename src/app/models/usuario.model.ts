export interface Usuario {
  _id?: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno?: string;
  estatus: string;
  fechaNacimiento: string; 
  sexo: string;           
  edad: number;
  entidad: string;
  municipio: string;
  colonia: string;
  codigoPostal: string;   
  talla: number;           
  peso: number;          
  email: string;
  aceptaTerminos: boolean;
  ocupacion?: string;     
  estadoCivil?: string;   
  nivelEducativo?: string; 
  idioma?: string;         
 
  hobbies?: string[];    
  notasAdicionales?: string; 
}