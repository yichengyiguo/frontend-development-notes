import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'main',
    loadChildren: './web/main/main.module#MainModule'
  },
  {
    path: 'javascript',
    loadChildren: './web/javascript/javascript.module#JavascriptModule'
  },
  {
    path: 'git',
    loadChildren: './web/git/git.module#GitModule'
  },
  {
    path: 'test',
    loadChildren: './web/test/test.module#TestModule'
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
