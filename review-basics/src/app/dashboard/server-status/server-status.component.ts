import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { ItemDashboardComponent } from "../item-dashboard/item-dashboard.component";
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [ItemDashboardComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  ngOnInit() {

    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.33) {
        this.currentStatus = 'online';
      }
      else if (rnd < 0.66) {
        this.currentStatus = 'offline';
      }
      else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
  // ngOnDestroy() {
  //   clearInterval(this.iterval);

  // }
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

}
