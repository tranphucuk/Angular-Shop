import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import {mainRoutes} from './main.routes';
import { UserModule } from './user/user.module';
import { FunctionModule } from './function/function.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    UserModule,
    FunctionModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
