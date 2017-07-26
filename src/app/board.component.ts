import { Component } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  title = 'board';

  columns = [
    {
      title: 'Open',
      items: [
        {
          id: 1,
          title: 'Sample',
        },
        {
          id: 2,
          title: 'Next',
        }
      ]
    },
    {
      title: 'In Progress',
      items: [
        {
          id: 3,
          title: 'Test'
        }
      ]
    },
    {
      title: 'Fixed',
      items: []
    }
  ];

  options: SortablejsOptions = {
    group: 'board',
    handle: '.board-card'
  };
}
