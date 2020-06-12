import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'tdl-to-do-tasks-list',
  templateUrl: './to-do-tasks-list.component.html',
  styleUrls: ['./to-do-tasks-list.component.scss']
})
export class ToDoTasksListComponent implements OnInit {

  title = 'Tâches à faire';

  taskArray: any[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.taskName = "Aucune tâche à réaliser pour le moment !";
    this.taskArray = this.taskService.getTaskArray();
  }

}
