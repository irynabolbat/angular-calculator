import { Component } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})

export class PipesComponent {
  public name = 'AngUlar'
  public surname = 'DEVEloper'

  public date = new Date().toDateString()
}