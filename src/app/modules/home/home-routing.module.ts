
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsModule } from '../details/details.module';

const routes: Routes = [
  {
    path:'gallery',
    loadChildren:() => import('../../modules/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path:'contacto',
    loadChildren: () => import('../../modules/contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path:'details',
    component:DetailsModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
