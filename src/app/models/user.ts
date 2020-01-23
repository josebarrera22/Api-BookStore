export interface Roles { // Interfaz para poder trabajar con roles en nuestra app.
    editor?: boolean;
    admin?: boolean;
  }
  
  export interface UserInterface { // Interfaz para poder trabajar con los siguientes campos pertenecientes a un usuario.
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
    roles: Roles;
  }