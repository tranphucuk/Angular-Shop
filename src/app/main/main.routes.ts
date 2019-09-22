import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UserComponent } from './user/user.component';
import { FunctionComponent } from './function/function.component';

export const mainRoutes: Routes = [
    {
      path: '', component: MainComponent, children: [
        { path: 'user', component: UserComponent },
        { path: 'function', component: FunctionComponent }
      ]
    },
  ]