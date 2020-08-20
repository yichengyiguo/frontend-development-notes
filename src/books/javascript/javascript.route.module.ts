import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { JavascriptComponent } from './javascript.component';
import { TemporaryComponent } from './temporary/temporary.component';
import { DataTypeComponent } from './data-type/data-type.component';
import { FunctionComponent } from './function/function.component';
import { ObjectComponent } from './object/object.component';
import { VariableComponent } from './variable/variable.component';

const routes: Routes = [
  {
    path: '' , 
    component: JavascriptComponent,
    children: [
      {path: 'variable', component: VariableComponent},
      {path: 'object', component: ObjectComponent},
      {path: 'function', component: FunctionComponent},
      {path: 'dataType', component: DataTypeComponent},
      {path: 'temporary', component: TemporaryComponent},
      {path: '**', redirectTo: '', pathMatch: 'prefix'}
    ]
  },
]

@NgModule({
  declarations: [
    TemporaryComponent,
    DataTypeComponent,
    FunctionComponent,
    ObjectComponent,
    VariableComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class JavascriptRouteModule { }
