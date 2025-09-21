import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itask } from '../../itask';
import { EventEmitter } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';
@Component({
  selector: 'app-todo-input',
  imports: [FormsModule,TodoList],
  standalone: true,
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.scss',
})
export class TodoInput {
  errors:string[]=[];
title: string = '';
  date: string = '';
  tasks: Itask[] = []; 
  
addTask(): string | void {
  this.title = this.title.trim();

  if (this.date === '') {
    this.errors.push("Date cannot be empty");
  } else if (this.title.length === 0) {
    this.errors.push("Title cannot be empty");
  } else {
    this.tasks.push({ title: this.title, date: this.date });
    this.title = '';
    this.date = '';
  }}

}
