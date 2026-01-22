import { Component, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { Task } from '../task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  allTasks = this.taskService.allTasks;
  constructor(private taskService: TaskService) { }
  onChangeTasksFilter(filter: string) {
    this.taskService.onChangeTasksFilter(filter);
    this.selectedFilter.set(filter);
    this.allTasks = this.taskService.allTasks;
  }
}
