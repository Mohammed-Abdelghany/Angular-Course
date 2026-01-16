import { Component } from '@angular/core';
import { ItemDashboardComponent } from "../../item-dashboard/item-dashboard.component";
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { Ticket } from '../ticket.model';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [ItemDashboardComponent, NewTicketComponent, TicketComponent],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];
  onAdd(data: { title: string, request: string }) {
    this.tickets.push({
      id: Math.random().toString(),
      title: data.title,
      request: data.request,
      status: 'open'
    });

  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map(ticket => {
      if (ticket.id === id) {
        return {
          ...ticket,
          status: 'closed'
        };
      }
      return ticket;
    }); 


  }

}
