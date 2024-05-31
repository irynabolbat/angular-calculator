import { NgModule } from '@angular/core';
import { PipesComponent } from './components/pipes/pipes.component';
import { PipeItemComponent } from './components/pipe-item/pipe-item.component';
import { CommonModule } from '@angular/common';
import { PipesRouting } from './pipes-routing.module';
import { MyCustomPipe } from './pipe/my-custom.pipe';

@NgModule({
  imports: [CommonModule, PipesRouting],
  declarations: [PipesComponent, PipeItemComponent, MyCustomPipe],
})
export class PipesModule { }
