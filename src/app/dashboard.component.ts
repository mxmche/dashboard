import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>{{title}}</h1>
    <app-board></app-board>
  `,
})
export class DashboardComponent {
  title = 'dashboard';
}
