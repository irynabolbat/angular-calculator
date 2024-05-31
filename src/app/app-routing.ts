import { Routes } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { MyEmptyPage } from './empty-route/empty-route.component';
import { MyDirectives } from './directives/directives.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    path: 'calculator',
    component: MyCalculatorComponent,
  },
  {
    path: 'object-list',
    loadChildren: () =>
      import('./object-list/object-list.module').then(
        (m) => m.MyObjectListModule
      ),
  },
  {
    path: 'directives',
    component: MyDirectives,
  },
  {
    path: '**',
    component: MyEmptyPage,
  },
];
