import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { MyNavigation } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyEmptyPage } from './empty-route/empty-route.component';
import { CommonModule } from '@angular/common';
import { MyObjectListRouting } from './object-list/object-list-routing.module';
import { MyObjectList } from './object-list/components/list/object-list.component';
import { LifeCycleRouting } from './lifecycle/life-cycle-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    CommonModule,
    MyCalculatorComponent,
    MyNavigation,
    MyEmptyPage,
    MyObjectList,
    MyObjectListRouting,
    LifeCycleRouting,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
