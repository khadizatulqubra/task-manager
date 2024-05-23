import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskArray: Task[] = [
    {
      id: 1,
      taskName: 'Do homework',
      isCompleted: false
    }
  ];

  constructor() { }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const newTaskId = this.taskArray.length ? Math.max(...this.taskArray.map(task => task.id)) + 1 : 1;
    this.taskArray.push({
      id: newTaskId,
      taskName: form.controls['task'].value,
      isCompleted: false
    });
    form.reset();
  }

  onDelete(taskId: number) {
    this.taskArray = this.taskArray.filter(task => task.id !== taskId);
  }

  onChecked(isCompleted: boolean): boolean {
    return isCompleted;
  }
}
