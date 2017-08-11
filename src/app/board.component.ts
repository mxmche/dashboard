import { Component } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

interface Board {
  id: number;
  projects: string[];
  columns: Array<BoardColumn>;
}

interface BoardColumn {
  id?: number;
  title: string;
  items: Array<Card>;
}

interface Card {
  id?: number;
  title: string;
  description: string;
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

  data: Board = {
    id: 1,
    projects: ['SAMPLE-1'],
    columns: [
      {
        id: 1,
        title: 'Open',
        items: [
          {
            id: 1,
            title: 'Sample',
            description: 'desc'
          },
          {
            id: 2,
            title: 'Next',
            description: 'desc'
          }
        ]
      },
      {
        id: 2,
        title: 'In Progress',
        items: [
          {
            id: 3,
            title: 'Test',
            description: 'desc'
          }
        ]
      },
      {
        id: 3,
        title: 'Fixed',
        items: []
      }
    ]
  };

  /**
   * Adds a column to board
   * @param value
   */
  onAddColumn(value: string) {
    if (value) {
      this.data.columns.push({
        title: value,
        items: []
      });
    }
  }

  /**
   * Adds a card to column
   * @param column
   * @param title
   * @param desc
   */
  onAddCard(column: BoardColumn, title: string, desc: string) {
    column.items.push({
      title,
      description: desc
    });
  }
}
