import { PhotosService } from './../../../services/photos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  loadedPhotos: string[] = [];

  constructor(private photosService: PhotosService) {}

  addNewPhoto() {
    this.photosService.addNewPhoto();
  }

  deletePhoto(index: number) {
    this.photosService.deletePhoto(index);
  }

  getPhotos() {
    return this.photosService.photos;
  }

  loadPhotos() {
    this.loadedPhotos = this.photosService.loadPhotos();
  }
  sharePhoto() {
    const latestPhoto = this.photosService.getLatestPhoto();
    if (latestPhoto) {
      this.photosService.sharePhoto(latestPhoto)
        .catch((error) => {
          console.error('Error al compartir la imagen:', error);
        });
    } else {
      console.error('No se ha capturado ninguna foto');
    }
  }
}
