import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {

  id: any;
  taskDetail: any;

  constructor(private route: ActivatedRoute,
    private appService: AppService
  ) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('taskId');
    this.taskDetail = this.appService.getTaskDetail(this.id);
  }

}
