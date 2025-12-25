import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskDetails } from './task.model';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})


export class Task {
  @Input({ required: true }) task!: TaskDetails;
  @Output() completed = new EventEmitter<number>();

  OnCompleteTask() {
    this.completed.emit(this.task.id);
  }
}
