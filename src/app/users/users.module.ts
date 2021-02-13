import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersTableComponent } from './components/users-table/users-table.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    UsersTableComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
