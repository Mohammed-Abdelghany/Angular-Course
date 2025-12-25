import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummyusers';
import { Tasks } from "./tasks/tasks";


@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserid?: number;

  getSelectuser() {
    return this.users.find((user) => user.id === this.selectedUserid);
  }
  onSelectUser(id: number) {
    this.selectedUserid = id;
  }

}
