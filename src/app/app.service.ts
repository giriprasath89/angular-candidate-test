import { Injectable } from '@angular/core';

@Injectable()

export class AppService {

  tasks: any = [];
  idNumber = 0;

  constructor() { }

  addTasks(value: any) {
    this.idNumber = this.idNumber + 1;
    this.tasks.push({ 'taskName': value.name, 'taskId': this.idNumber });
  }

  getTasks() {
    return this.tasks;
  }

  getTaskDetail(id: any) {
    let idx = this.tasks.findIndex((x: any) => x.taskId == id);
    return this.tasks[idx]
  }
}