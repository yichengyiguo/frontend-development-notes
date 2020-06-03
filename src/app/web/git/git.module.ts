import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { GitComponent } from './git.component';

const routes: Routes = [
  {path: '', component: GitComponent}
]

@NgModule({
  declarations: [GitComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class GitModule { }
