import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class CargaFotosService {

  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) { }

  cargarImagenesFirebase(imagenes: FileItem[]) {

    const storageRef = firebase.storage().ref();

    for (const item of imagenes) {

      item.estaSubinedo = true;

      if (item.progreso >= 100) {
        continue;
      }

      const uploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).put(item.archivo);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,

        (snapshot) => {

          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
          item.progreso = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);

        },
        (error) => {

          console.log(error);
        },
        () => {

          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {

            console.log('Imagen cargada correctamente', downloadURL);
            item.url = downloadURL;
            item.estaSubinedo = false;

            this.guardarImagen({
              nombre: item.nombreArchivo,
              url: item.url
            });

          });
        });

    }


  }

  private guardarImagen(imagen: {nombre: string, url: string}) {

    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);

  }

}
