import {
  CommonModule,
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-directives',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgStyle,
    NgClass,
  ],
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class MyDirectives {
  //structure directives
  // ngFor
  public colors: string[] = ['red', 'blue', 'green', 'yellow'];

  // ngIf
  public isShow: boolean = true;

  //ngSwitch
  public currentColor: string = this.colors[0];

  //atribute directives
  //ngStyle
  public elementStyle: any = {
    color: 'red',
    opacity: 0.5,
  };
}
