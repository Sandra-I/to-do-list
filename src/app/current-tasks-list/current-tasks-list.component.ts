import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'tdl-current-tasks-list',
  templateUrl: './current-tasks-list.component.html',
  styleUrls: ['./current-tasks-list.component.scss']
})
export class CurrentTasksListComponent implements OnInit {

  // Titre du contenu
  title = "Tâches en cours";

  // Attribut pour récupérer le tableau des tâches
  taskArray: any[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskArray = this.taskService.getTaskArray();
  }

}
