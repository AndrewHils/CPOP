// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { SelectedUsersComponent } from './selected-users/selected-users.component';

const routes: Routes = [
  { path: 'user-table', component: UserTableComponent },
  { path: 'selected-users', component: SelectedUsersComponent },
  { path: '', redirectTo: '/user-table', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
  