export class Car {
  public marca: string;
  public linea: string;
  public referencia: string;
  public modelo: number;
  public kilometraje: number;
  public color: string;
  public imagen: string;

  constructor(
    marca: string,
    linea: string,
    referencia: string,
    modelo: number,
    kilometraje: number,
    color: string,
    imagen: string,
  ) {
    this.marca = marca;
    this.linea = linea;
    this.referencia = referencia;
    this.modelo = modelo;
    this.kilometraje = kilometraje;
    this.color = color;
    this.imagen = imagen;
  }
}
