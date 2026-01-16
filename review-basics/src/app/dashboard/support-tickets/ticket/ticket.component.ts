import { Component, Input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  title: string = '';
  request: string = '';
  status: 'open' | 'in-progress' | 'closed' = 'open';
  @Input({ required: true }) ticketView?: Ticket;
  close = output();

  showDetails = signal(false);
  ngOnInit() {
    if (this.ticketView) {
      this.title = this.ticketView.title;
      this.request = this.ticketView.request;
      this.status = this.ticketView.status;
    }


  }
  onToglleDetails() {
    this.showDetails.update((current) => !current);
  }
  onCloseTicket() {
    this.close.emit();
  }



}
