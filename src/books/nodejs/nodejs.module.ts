import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { NodejsComponent } from './nodejs.component';

const routes: Routes = [
  {path: '', component: NodejsComponent}
]

@NgModule({
  declarations: [NodejsComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class NodejsModule { }
