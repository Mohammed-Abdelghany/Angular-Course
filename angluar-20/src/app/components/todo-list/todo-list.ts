import { Component, Input } from '@angular/core';
import { Itask } from '../../itask';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,NgClass],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
 title: string = '';
  date: string = '';
  completed: boolean = false;
    @Input() tasks: Itask[] = []; 
    deleteTask(index: number) {
      this.tasks.splice(index, 1);
    }
    toggleComplete(index: number) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }

}
