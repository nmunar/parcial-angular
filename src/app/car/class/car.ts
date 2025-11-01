export class Car {
  private marca: string;
  private linea: string;
  private referencia: string;
  private modelo: number;
  private kilometraje: number;
  private color: string;
  private imagen: string;

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
