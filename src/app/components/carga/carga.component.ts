import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaFotosService } from '../../services/carga-fotos.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  estaSobreElemento = false;

  archivos: FileItem[] = [];

  constructor(public cargaFotosService: CargaFotosService) { }

  ngOnInit() {
  }

  cargarImagenes() {
    this.cargaFotosService.cargarImagenesFirebase(this.archivos);
  }

  limpiarArchivos() {
    this.archivos = [];
  }


}
