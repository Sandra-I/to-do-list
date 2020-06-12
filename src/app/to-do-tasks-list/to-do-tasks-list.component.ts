import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdl-to-do-tasks-list',
  templateUrl: './to-do-tasks-list.component.html',
  styleUrls: ['./to-do-tasks-list.component.scss']
})
export class ToDoTasksListComponent implements OnInit {

  title = 'Tâches à faire';

  taskName: string;

  constructor() { }

  ngOnInit(): void {
    this.taskName = "Aucune tâche à réaliser pour le moment !";
  }

}
