import { Component, signal } from '@angular/core';
import { TodoInput } from './components/todo-input/todo-input';

@Component({
  selector: 'app-root',
  imports: [ TodoInput],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angluar-20');
  
}
