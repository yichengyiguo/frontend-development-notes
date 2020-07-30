import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AngularComponent } from './angular.component';

const routes: Routes = [
  {path: '', component: AngularComponent}
]

@NgModule({
  declarations: [AngularComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AngularModule { }
