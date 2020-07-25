import { NgModule } from '@angular/core';
import { HtmlComponent } from './html.component';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {path: '', component: HtmlComponent}
]

@NgModule({
  declarations: [HtmlComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HtmlModule { }
