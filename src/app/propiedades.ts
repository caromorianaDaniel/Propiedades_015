export class Propiedad {
  public _identificador: string;
  public _numero: string;
  public _calles: Array<string>;
  public _codpost: number;
  public _metrosc: number;
  public _preciom: number;
  public _propietario: string;

  constructor(
    identificador: string,
    numero: string,
    calles: Array<string>,
    codpost: number,
    metrosc: number,
    preciom: number,
    propietario: string
  ) {
    this._identificador = identificador;
    this._numero = numero;
    this._calles = calles;
    this._codpost = codpost;
    this._metrosc = metrosc;
    this._preciom = preciom;
    this._propietario = propietario;
  }

  get identificador() {
    return this._identificador;
  }
  get numero() {
    return this._numero;
  }
  get calles() {
    return this._calles;
  }
  get codpost() {
    return this._codpost;
  }
  get metrosc() {
    return this._metrosc;
  }
  get preciom() {
    return this._preciom;
  }
  get propietario() {
    return this._propietario;
  }

  cprecioBase() {
    let precioBase = this._metrosc * this._preciom;
    return precioBase;
  }

  precio() {
    let precio = this._metrosc * this._preciom;
    return precio;
  }

  imprimir(): any {
    let imprimir: string;
    imprimir = `Identificador: ${this._identificador},
    Otras Calles:
    ${this.calles[1]},
    ${this.calles[2]},
    ${this.calles[3]},
    Metros Cuadrados: ${this._metrosc},
    Precio del Metro: ${this._preciom}`;
    return imprimir;
  }
}
