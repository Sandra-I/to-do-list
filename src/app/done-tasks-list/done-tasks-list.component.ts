import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Subscription } from 'rxjs';
import { Task } from '../models/task.model';

@Component({
  selector: 'tdl-done-tasks-list',
  templateUrl: './done-tasks-list.component.html',
  styleUrls: ['./done-tasks-list.component.scss']
})
export class DoneTasksListComponent implements OnInit, OnDestroy {

  // Titre du contenu
  title = 'Tâches terminées';

  // Attribut permettant de stocker le table des tâches
  taskArray: any[];

  tasksSubscription: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasksSubscription = this.taskService.tasksArraySubject.subscribe(
      (tasks: Task[]) => {
        this.taskArray = tasks;
      }
    );
    this.taskService.emitTasksArray();
  }

  ngOnDestroy() {
    this.tasksSubscription.unsubscribe();
  }
}
