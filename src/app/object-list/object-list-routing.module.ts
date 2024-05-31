import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyObjectList } from './components/list/object-list.component';
import { MyObjectItem } from './components/object-item/object-item.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MyObjectList,
  },
  {
    path: ':id',
    component: MyObjectItem,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyObjectListRouting {}
