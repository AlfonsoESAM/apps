import { DetailsComponent } from './modules/details/pages/details.component';
import { ContactoComponent } from './modules/contacto/pages/contacto.component';
import { GalleryComponent } from './modules/gallery/pages/gallery.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './modules/home/pages/home-pages.component';
import { HistorialPagesComponent } from './modules/historial/pages/historial-pages/historial-pages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePagesComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'historial',
    component: HistorialPagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
