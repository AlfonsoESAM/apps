
import { GalleryComponent } from './modules/gallery/pages/gallery.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { DetailsComponent } from './modules/details/pages/details.component';
import { ContactoComponent } from './modules/contacto/pages/contacto.component';
import { HomePagesComponent } from './modules/home/pages/home-pages.component';
import { SlideMenuComponent } from './shared/slide-menu/slide-menu.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HistorialPagesComponent } from './modules/historial/pages/historial-pages/historial-pages.component';




@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DetailsComponent,
    ContactoComponent,
    HomePagesComponent,
    SlideMenuComponent,
    HistorialPagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
