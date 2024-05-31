import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyObjectListRouting } from './object-list-routing.module';
import { MyObjectItem } from './components/object-item/object-item.component';

@NgModule({
  imports: [CommonModule, MyObjectListRouting],
  exports: [],
  declarations: [MyObjectItem],
})
export class MyObjectListModule {}
