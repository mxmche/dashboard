import { Component } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
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
        { id: 3, title: 'Test' }
      ]
    },
    { title: 'Fixed', items: [] }
  ];

  items1 = [1, 2, 3, 4, 5];
  items2 = ['a', 'b', 'c', 'd', 'e'];

  options: SortablejsOptions = {
    group: 'board',
    // draggable: '.tile',
    handle: '.tile__name'
  };
}
