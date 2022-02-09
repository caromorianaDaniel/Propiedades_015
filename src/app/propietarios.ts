export class Propietario {
  public _DNI: string;
  public _nombre: string;
  public _apellidos: string;
  public _nacimiento: Date;
  public _propiedades: Array<string>;

  constructor(
    DNI: string,
    nombre: string,
    apellidos: string,
    nacimiento: Date,
    propiedades: Array<string>
  ) {
    this._DNI = DNI;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._nacimiento = nacimiento;
    this._propiedades = propiedades;
  }
}
