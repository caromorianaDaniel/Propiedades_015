import { Propiedad } from './propiedades';

export class Solar extends Propiedad {
  private _edificable: boolean;
  private _agua: boolean;
  private _luz: boolean;
  private _lejania: number;

  constructor(
    identificador: string,
    numero: string,
    calles: Array<string>,
    codpost: number,
    metrosc: number,
    preciom: number,
    precioBase: number,
    propietario: string,
    edificable: boolean,
    agua: boolean,
    luz: boolean,
    lejania: number
  ) {
    super(
      identificador,
      numero,
      calles,
      codpost,
      metrosc,
      preciom,
      precioBase,
      propietario
    );
    this._edificable = edificable;
    this._agua = agua;
    this._luz = luz;
    this._lejania = lejania;
  }
}
