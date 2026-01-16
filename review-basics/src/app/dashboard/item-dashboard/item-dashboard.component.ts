import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-item-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './item-dashboard.component.html',
  styleUrl: './item-dashboard.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ItemDashboardComponent {
  img = input.required<{ src: string, alt: string }>();
  title = input.required<string>();



}
