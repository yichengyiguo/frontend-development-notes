import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CssComponent } from './css.component';

const routes: Routes = [
  {path: '', component: CssComponent}
]

@NgModule({
  declarations: [CssComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CssModule { }
