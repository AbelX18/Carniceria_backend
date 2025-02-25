export class Usuario {
  nombre: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(nombre: string, email: string, createdAt: Date, updatedAt: Date) {
    this.nombre = nombre;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
