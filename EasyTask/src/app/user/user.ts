import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummyusers';
import { required } from '@angular/forms/signals';
import { UserModel } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({ required: true }) user!: UserModel;
  @Input({ required: true }) selected: boolean = false;


  getImagePath = computed(() => "/users/" + this.user.avatar);
  select = output<number>();


  onSelectUser() {
    this.select.emit(this.user.id);
  }



}
