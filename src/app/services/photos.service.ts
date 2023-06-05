import { Injectable } from '@angular/core';
import { CameraResultType, CameraSource,Camera } from '@capacitor/camera';
import { Share } from '@capacitor/share';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photos: string[] = []

  constructor()
  {}

  async addNewPhoto(){
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality:100
  });
  if(photo.webPath){
  this.photos.unshift(photo.webPath);
  this.savePhotos();
  }
  }

  private savePhotos(){
  localStorage.setItem('photos', JSON.stringify(this.photos));
  }


  loadPhotos(): string[] {
    const photos = localStorage.getItem('photos');
    if (photos) {
      return JSON.parse(photos);
    }
    return [];
  }

    deletePhoto(index: number) {
      if (index >= 0 && index < this.photos.length) {
        this.photos.splice(index, 1);
        this.savePhotos();
      }
    }

    getLatestPhoto(): string | undefined {
      if (this.photos.length > 0) {
        return this.photos[0];
      }
      return undefined;
    }

    async sharePhoto(imagePath: string) {
      try {
        const shareOptions = {
          title: 'Compartir imagen',
          text: '¡Mira esta imagen!',
          url: imagePath,
          dialogTitle: 'Compartir imagen'
        };

        await Share.share(shareOptions);
      } catch (error) {
        console.error('Error al compartir la imagen:', error);
      }
    }
}
