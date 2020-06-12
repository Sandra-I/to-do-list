import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdl-done-tasks-list',
  templateUrl: './done-tasks-list.component.html',
  styleUrls: ['./done-tasks-list.component.scss']
})
export class DoneTasksListComponent implements OnInit {

  title = 'Tâches faites';

  taskName: string;

  constructor() { }

  ngOnInit(): void {
    this.taskName = "Pas de tâches terminées";
  }

}
