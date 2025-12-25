import { Component, EventEmitter, Output } from '@angular/core';
import { NewTaskDetails } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {

  @Output() taskCanceled = new EventEmitter<void>();
  @Output() taskAdded = new EventEmitter<NewTaskDetails>();
  newTaskDetails: NewTaskDetails = {
    title: '',
    summary: '',
    dueDate: ''
  };
  onCancel() {
    this.taskCanceled.emit();
  }

  onSubmitTask() {
    this.taskAdded.emit(this.newTaskDetails);
  }
}
