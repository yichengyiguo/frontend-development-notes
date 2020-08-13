import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { JavascriptComponent } from './javascript.component';
import { JavascriptRouteModule } from './javascript.route.module';

@NgModule({
  declarations: [JavascriptComponent],
  imports: [
    CommonModule,
    JavascriptRouteModule
  ]
})
export class JavascriptModule { }
