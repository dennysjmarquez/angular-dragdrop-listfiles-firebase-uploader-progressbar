export class FileItem {

  public archivo: File;
  public nombreArchivo: string;
  public url: string;
  public estaSubinedo: boolean;
  public progreso: number;

  constructor(archivo: File) {

    this.archivo = archivo;
    this.nombreArchivo = archivo.name;
    this.estaSubinedo = false;
    this.progreso = 0;

  }

}
