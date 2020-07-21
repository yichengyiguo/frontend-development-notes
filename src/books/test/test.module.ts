import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component';

const routes: Routes = [
  {path: '', component: TestComponent}
]

@NgModule({
  declarations: [TestComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TestModule { }
