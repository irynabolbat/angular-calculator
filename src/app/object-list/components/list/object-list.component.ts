import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'my-object-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss'],
  standalone: true,
})
export class MyObjectList {
  constructor(private router: Router, private route: ActivatedRoute) {} // Close the constructor properly

  public myObjects = myObjects;

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}

export const myObjects: MyObject[] = [
  { title: 'first', content: 'firstContent', id: 1 },
  { title: 'second', content: 'secondContent', id: 2 },
  { title: 'third', content: 'thirdContent', id: 3 },
];

export interface MyObject {
  title: string;
  content: string;
  id: number;
}
