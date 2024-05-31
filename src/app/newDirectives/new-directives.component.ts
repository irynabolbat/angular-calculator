import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyChangeColorDirectiveDirective } from './createdDirectives/my-change-color-directive.directive';
import { MyIfDirectiveDirective } from './createdDirectives/my-if-directive.directive';

@Component({
  selector: 'new-directives',
  standalone: true,
  imports: [CommonModule, FormsModule, MyChangeColorDirectiveDirective, MyIfDirectiveDirective],
  templateUrl: './new-directives.component.html',
  styleUrls: ['./new-directives.component.scss'],
})
export class NewDirectives {
  public colors: string[] = ['red', 'blue', 'green', 'yellow'];

  public isShow: boolean = true
}
