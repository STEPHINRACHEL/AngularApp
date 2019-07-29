import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'edit', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
