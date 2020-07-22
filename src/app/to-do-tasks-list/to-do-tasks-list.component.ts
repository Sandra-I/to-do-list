import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tdl-to-do-tasks-list',
  templateUrl: './to-do-tasks-list.component.html',
  styleUrls: ['./to-do-tasks-list.component.scss']
})
export class ToDoTasksListComponent implements OnInit, OnDestroy {

  // Titre du compo
  title = 'Tâches à faire';

  // Attribut où on va stocker un tableau de type Task
  taskArray: Task[];

  // On fait appel à subscription pour souscrire au sujet du service
  tasksSubscription: Subscription;

  constructor(private taskService: TaskService) { }

  // A la création du compo on récupère le tableau de tâches
  ngOnInit() {
    this.tasksSubscription = this.taskService.tasksArraySubject.subscribe(
      (tasks: Task[]) => {
        this.taskArray = tasks;
      }
    );
    this.taskService.emitTasksArray();
  }

  // A la destruction du component on se désabonne de la subscription
  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
  }

}
