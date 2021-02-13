import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './users/pages/main/main.component';

const routes: Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
