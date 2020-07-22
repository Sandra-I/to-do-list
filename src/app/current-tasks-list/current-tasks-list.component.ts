import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tdl-current-tasks-list',
  templateUrl: './current-tasks-list.component.html',
  styleUrls: ['./current-tasks-list.component.scss']
})
export class CurrentTasksListComponent implements OnInit, OnDestroy {

  // Titre du contenu
  title = "Tâches en cours";

  // Attribut pour récupérer le tableau des tâches
  taskArray: Task[];

  // On fait appel à subscription pour souscrire au sujet du service sans cela on ne recevra pas les mises à jour sur les tâches en BDD
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

  // A la destruction du component on se désabonne de la subscription
  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
  }

}
