import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'tdl-done-tasks-list',
  templateUrl: './done-tasks-list.component.html',
  styleUrls: ['./done-tasks-list.component.scss']
})
export class DoneTasksListComponent implements OnInit {

  title = 'Tâches faites';

  taskArray: any[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.taskName = "Pas de tâches terminées";
    this.taskArray = this.taskService.getTaskArray();
  }

}
