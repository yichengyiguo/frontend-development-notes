import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BookLinkComponent } from './book-link.component';



@NgModule({
  declarations: [BookLinkComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BookLinkComponent
  ]
})
export class BookLinkModule { }
