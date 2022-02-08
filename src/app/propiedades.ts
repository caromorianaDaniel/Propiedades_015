export class Propiedad {
  public _identificador: string;
  private _tipoObjeto: string;
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

  identificador() {
    return this._identificador;
  }
  numero() {
    return this._numero;
  }
  calles() {
    return this._calles;
  }
  codpost() {
    return this._codpost;
  }
  metrosc() {
    return this._metrosc;
  }
  preciom() {
    return this._preciom;
  }
  propietario() {
    return this._propietario;
  }

  precio() {
    let precio = this._metrosc * this._preciom;
    return precio;
  }
}
