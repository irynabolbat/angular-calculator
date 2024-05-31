import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() title!: string;

  @Output() eventChange = new EventEmitter<string>();

  public tempTitle?: string;

  ngOnInit(): void {
    this.tempTitle = this.title;
  }

  public clickHandler(): void {
    this.tempTitle = 'newTitle';
    this.eventChange.emit(this.tempTitle);
  }
}
