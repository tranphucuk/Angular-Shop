import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionComponent } from './function.component';
import { Routes, RouterModule } from '@angular/router';

export const functionRoute: Routes = [
  { path: 'function', component: FunctionComponent }
]

@NgModule({
  declarations: [FunctionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(functionRoute)
  ]
})
export class FunctionModule { }
