import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'tdl-to-do-tasks-list',
  templateUrl: './to-do-tasks-list.component.html',
  styleUrls: ['./to-do-tasks-list.component.scss']
})
export class ToDoTasksListComponent implements OnInit {

  // Titre du compo
  title = 'Tâches à faire';

  // Attribut où on va stocker le tableau récupérer du service
  taskArray: any[];

  constructor(private taskService: TaskService) { }

  // A la création du compo on récupère le tableau de tâches
  ngOnInit(): void {
    this.taskArray = this.taskService.getTaskArray();
  }

}
