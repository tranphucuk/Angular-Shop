import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';

export const userRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
   //localhost:4200/main/user/index
  { path: 'index', component: UserComponent }
]

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
  ]
})
export class UserModule { }
