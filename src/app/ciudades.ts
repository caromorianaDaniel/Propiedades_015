export class Ciudades {
  public _nombre: string;
  public _preciom: number;
  public _codpost: number;

  constructor(nombre: string, preciom: number, codpost: number) {
    this._nombre = nombre;
    this._preciom = preciom;
    this._codpost = codpost;
  }

  codpost() {
    return this._codpost;
  }
}
