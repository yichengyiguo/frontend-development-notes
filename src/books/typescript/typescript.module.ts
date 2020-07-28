import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypescriptComponent } from './typescript.component';

const routes: Routes = [
  {path: '', component: TypescriptComponent}
]

@NgModule({
  declarations: [TypescriptComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TypescriptModule { }
