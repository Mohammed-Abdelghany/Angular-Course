import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { User } from '../user/user';
import { Task } from "./task/task";
import { title } from 'node:process';
import { NewTask } from "./new-task/new-task";
import { NewTaskDetails } from './task/task.model';
import { Card } from "../shared/card/card";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask, Card],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId?: number;

  @Input({ required: true }) taskName?: string;
  private tasksService: TasksService;



  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }
  get isAddingTask() {
    return this.tasksService.isAddingTask;
  }



  get selectedTasks() {

    return this.tasksService.getTasksForUser(this.userId!);
  }
  onTaskCompleted(taskId: number) {
    this.tasksService.onTaskCompleted(taskId);
  }

  OnAddTask() {
    this.tasksService.OnStartAddTask();
  }

  onAddNewTask(newTaskDetails: NewTaskDetails) {
    this.tasksService.onAddNewTask(this.userId!, newTaskDetails);
  }

  OnCancelAddTask() {
    this.tasksService.OnCancelAddTask();
  }
}
