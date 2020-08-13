import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { JavascriptComponent } from './javascript.component';
import { TemporaryComponent } from './temporary/temporary.component';
import { DataTypeComponent } from './data-type/data-type.component';

const routes: Routes = [
  {
    path: '' , 
    component: JavascriptComponent,
    children: [
      {path: 'dataType', component: DataTypeComponent},
      {path: 'temporary', component: TemporaryComponent},
      {path: '**', redirectTo: '', pathMatch: 'prefix'}
    ]
  },
]

@NgModule({
  declarations: [
    TemporaryComponent,
    DataTypeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class JavascriptRouteModule { }
