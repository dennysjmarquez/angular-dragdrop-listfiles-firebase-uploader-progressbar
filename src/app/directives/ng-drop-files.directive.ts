import { Directive, HostListener, EventEmitter, ElementRef, Input, Output } from '@angular/core';
import {FileItem} from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragEnter(event: any) {

    this._prevedirDetener(event);
    this.mouseSobre.emit(true);

  }

  @HostListener('dragleave', ['$event']) public onDragEnd(event: any) {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event']) public onDrop(event: any) {

    this._prevedirDetener(event);

    const transfer = this._getDataTransfer(event);

    if (!transfer) { return; }

    this._extraerArchivos(transfer.files);
    this.mouseSobre.emit(false);

  }

  private _getDataTransfer(event: any) {

    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;

  }

  private _extraerArchivos(archivosLista: FileList) {

    Object.getOwnPropertyNames(archivosLista).forEach((element: any) => {

      const  currentElement = archivosLista[element];

      if (this._canLoaded(currentElement)) {

        this.archivos.push(new FileItem(currentElement));

      }

    });

  }

  // Validaciones

  private _canLoaded(archivo: File): boolean {

    return !this._isDrop(archivo.name) && this.isImage(archivo.type);

  }

  private _isDrop(nombreArchivo: string): boolean {

    for (const archivo of this.archivos) {

      if (archivo.nombreArchivo === nombreArchivo) {

        console.log('Ya esta en la lista', nombreArchivo);

        return true;

      }

    }

    return false;

  }

  private isImage(tipoArchivo: string): boolean {

    return (tipoArchivo === '' || 'undefined' === typeof tipoArchivo)
      ? false
      : tipoArchivo.startsWith('image');

  }

  private _prevedirDetener(event) {

    event.preventDefault();
    event.stopPropagation();

  }


}
