
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    isAddingTask: boolean = false;
    tasks = [
        { id: 1, userId: 1, title: "Task 1", completed: false, summary: "This is task 1", dueDate: "2025-12-28" },
        { id: 2, userId: 2, title: "Task 2", completed: true, summary: "This is task 2", dueDate: "2024-11-11" },
        { id: 3, userId: 3, title: "Task 3", completed: false, summary: "This is task 3", dueDate: "2026-1-10" }

    ]

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }
    getTasksForUser(userId: number) {
        return this.tasks.filter(task => task.userId === userId);

    }

    onTaskCompleted(taskId: number) {
        return this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    OnStartAddTask() {
        return this.isAddingTask = true;

    }
    onAddNewTask(userId: number, newTaskDetails: { title: string; summary: string; dueDate: string; }) {
        const newTaskId = this.tasks.length + 1;
        this.tasks.unshift(
            {
                id: newTaskId,
                userId: userId,
                title: newTaskDetails.title,
                completed: false,
                summary: newTaskDetails.summary,
                dueDate: newTaskDetails.dueDate
            }

        );
        this.saveTasksToLocalStorage();
        return this.isAddingTask = false;

    }

    OnCancelAddTask() {
        return this.isAddingTask = false;
    }

    private saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}