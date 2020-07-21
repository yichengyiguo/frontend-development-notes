import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { BookLinkModule } from '../../components/book-link/book-link.module';

const routes: Routes = [
  {path: '', component: MainComponent}
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    BookLinkModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
