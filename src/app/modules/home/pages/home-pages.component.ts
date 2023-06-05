import { PhotosService } from './../../../services/photos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent {



  constructor(private PhotosService:PhotosService){
  }


  sharePhotos(){
    this.PhotosService.sharePhoto('ruta_de_la_imagen.jpg')
    .catch((error) => {
      console.error('Error al compartir la imagen:', error);
    });
  }

  

}
