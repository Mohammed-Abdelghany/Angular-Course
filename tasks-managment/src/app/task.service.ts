import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './tasks/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = signal<Task[]>([]);
  public allTasks = this.tasks.asReadonly();

  constructor() { }


  addTask(title: string, description: string) {
    this.tasks.update((currentTasks) => [
      ...currentTasks,
      {
        id: Math.random().toString(),
        title,
        description,
        status: 'OPEN',
      },
    ]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      });
    });
  }
  onChangeTasksFilter(filter: string) {
    switch (filter) {
      case 'all':
        this.allTasks = this.tasks.asReadonly();
        break;
      case 'open':
        this.allTasks = signal(
          this.tasks().filter((task) => task.status === 'OPEN')
        );
        break;
      case 'in-progress':
        this.allTasks = signal(
          this.tasks().filter((task) => task.status === 'IN_PROGRESS')
        );
        break;
      case 'done':
        this.allTasks = signal(
          this.tasks().filter((task) => task.status === 'DONE')
        );
        break;
      default:
        this.allTasks = this.tasks.asReadonly();
    }
  }

}

