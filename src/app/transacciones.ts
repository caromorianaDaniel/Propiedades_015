export class Transaccion {
  public _tipoTrans: string;
  public _identificador: string;
  public _fecha: Date;
  public _plazos: number;
  public _precio: number;
  public _pago: number;

  constructor(
    identificador: string,
    fecha: Date,
    plazos: number,
    precio: number,
    pago: number,
    tipoTrans: string
  ) {
    this._tipoTrans = tipoTrans;
    this._identificador = identificador;
    this._fecha = fecha = new Date();
    this._plazos = plazos;
    this._precio = precio;
    this._pago = pago;
  }
  /*
  get tipoTrans(){
      return this._tipoTrans
  }
  get identificador(){
      return this._identificador
  }
  get fecha(){
      return this._fecha
  }
  get plazos(){
      return this._plazos
  }
  get precio(){
      return this._precio
  }
  get pago(){
      return this._pago
  }

  calculoPagoVenta(precio:number,plazos:number){
      let pago: number
      pago = precio/plazos
      return pago
  }
  calculoPagoAlq(precio:number,plazos:number){
      let pago: number
      pago = precio/(plazos*0.1)
      return pago
  }*/
}
