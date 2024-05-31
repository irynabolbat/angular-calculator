import { NgModule } from '@angular/core';
import { FormsComponent } from './components/forms/forms.component';
import { CommonModule } from '@angular/common';
import { FormsRouting } from './forms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsRouting, ReactiveFormsModule],
  declarations: [FormsComponent],
  providers: [],
})
export class FormsModule {}
