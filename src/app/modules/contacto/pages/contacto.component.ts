import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  darkMode: boolean = true

  constructor(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches
  }

  cambio(){

    this.darkMode = !this.darkMode
    document.body.classList.toggle('dark')
}
}
