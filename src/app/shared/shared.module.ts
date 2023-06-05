import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';


@NgModule({
  declarations: [SlideMenuComponent],
  imports: [
    CommonModule,
  ],
  exports:[SlideMenuComponent]
})
export class SharedModule { }
