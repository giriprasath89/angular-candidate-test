import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  tasks: any;
  constructor(private appService: AppService,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.tasks = this.appService.getTasks();
  }

  goToDetail(taskId: any) {
    this.router.navigate(['tasks', taskId]);
  }
}
