import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from "@angular/router";
import { JavascriptComponent } from './javascript.component';
import { TemporaryModule } from './temporary/temporary.module';
import { TemporaryComponent } from './temporary/temporary.component';

const routes: Routes = [
  {
    path: '' , 
    component: JavascriptComponent,
    children: [
      {path: 'temporary', component: TemporaryComponent},
      {path: '**', redirectTo: '', pathMatch: 'prefix'}
    ]
  },
]

@NgModule({
  declarations: [JavascriptComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TemporaryModule
  ]
})
export class JavascriptModule { }
