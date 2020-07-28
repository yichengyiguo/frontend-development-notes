import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'main',
    loadChildren: '../books/main/main.module#MainModule'
  },
  {
    path: 'javascript',
    loadChildren: '../books/javascript/javascript.module#JavascriptModule'
  },
  {
    path: 'git',
    loadChildren: '../books/git/git.module#GitModule'
  },
  {
    path: 'html',
    loadChildren: '../books/html/html.module#HtmlModule'
  },
  {
    path: 'css',
    loadChildren: '../books/css/css.module#CssModule'
  },
  {
    path: 'typescript',
    loadChildren: '../books/typescript/typescript.module#TypescriptModule'
  },
  {
    path: 'test',
    loadChildren: '../books/test/test.module#TestModule'
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
