import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'tdl-done-tasks-list',
  templateUrl: './done-tasks-list.component.html',
  styleUrls: ['./done-tasks-list.component.scss']
})
export class DoneTasksListComponent implements OnInit {

  // Titre du contenu
  title = 'Tâches terminées';

  // Attribut permettant de stocker le table des tâches
  taskArray: any[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskArray = this.taskService.getTasksArray();
  }
}
