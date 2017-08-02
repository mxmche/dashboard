import { Component } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

interface Card {
  id: number;
  title: string;
  description: string;
}

interface BoardColumn {
  title: string;
  items: Array<Card>;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  title = 'board';

  options: SortablejsOptions = {
    group: 'board',
    handle: '.board-card',
  };

  columns: Array<BoardColumn> = [
    {
      title: 'Open',
      items: [
        {
          id: 1,
          title: 'Sample',
          description: ''
        },
        {
          id: 2,
          title: 'Next',
          description: ''
        }
      ]
    },
    {
      title: 'In Progress',
      items: [
        {
          id: 3,
          title: 'Test',
          description: ''
        }
      ]
    },
    {
      title: 'Fixed',
      items: []
    }
  ];

  onAddBoard(value: string) {
    if (value) {
      this.columns.push({
        title: value,
        items: []
      });
    }
  }

  onAddCard(column: BoardColumn, title: string, desc: string) {
    column.items.push({
      title,
      id: Math.random(),
      description: desc
    });
  }
}
