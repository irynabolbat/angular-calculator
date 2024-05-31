import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LifeCycleRouting } from './life-cycle-routing.module';
import { ChildComponent } from './componets/child/child.component';
import { ParentComponent } from './componets/parent/parent.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, LifeCycleRouting],
  exports: [ParentComponent, ChildComponent],
})
export class LifeCycleModule {}
