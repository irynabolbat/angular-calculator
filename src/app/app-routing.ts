import { Routes } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { MyDirectives } from './directives/directives.component';
import { NewDirectives } from './newDirectives/new-directives.component';

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
    path: 'new-directives',
    component: NewDirectives
  },
  {
    path: 'life-cycle',
    loadChildren: () =>
      import('./lifecycle/life-cycle.module').then(
        (m) => m.LifeCycleModule
      ),
  },
  {
    path: 'requests',
    loadChildren: () =>
      import('./requests/request-module.module').then(
        (m) => m.RequestsModule
      ),
  },
  {
    path: '**',
    component: MyEmptyPage,
  },
];
