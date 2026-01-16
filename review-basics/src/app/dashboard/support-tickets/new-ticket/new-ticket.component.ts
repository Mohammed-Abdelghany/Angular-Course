import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule, NgForm } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',

})
export class NewTicketComponent {
  title: string = '';
  request: string = '';
  @Output() add = new EventEmitter<{ title: string, request: string }>();
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.add.emit({ title: this.title, request: this.request });

  }


}


