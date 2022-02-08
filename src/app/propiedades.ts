export class Propiedad {
  private _identificador: string;
  private _tipoObjeto: string;
  private _numero: string;
  private _calles: Array<string>;
  private _codpost: number;
  private _metrosc: number;
  private _preciom: number;
  private _propietario: string;

  constructor(
    identificador: string,
    tipoObjeto: string,
    numero: string,
    calles: Array<string>,
    codpost: number,
    metrosc: number,
    preciom: number,
    propietario: string
  ) {
    this._identificador = identificador;
    this._tipoObjeto = tipoObjeto;
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
  get tipoObjeto() {
    return this._tipoObjeto;
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

  precio() {
    let precio = this._metrosc * this._preciom;
    return precio;
  }
}
