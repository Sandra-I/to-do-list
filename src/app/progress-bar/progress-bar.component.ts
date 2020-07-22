import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Subscription } from 'rxjs';
import { Task } from '../models/task.model';

@Component({
  selector: 'tdl-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {

  // Attribut permettant de stocker le tableau des tâches
  tasksArray: Task[];

  // Titre
  title: string = 'Votre progression : ';

  // Nombre total de tâche(s) en BDD
  tasksNumberTotal: number;

  // Nombre total de tâche(s) terminée(s)
  tasksDoneTotal: number;

  // Attribut pour stocker le taux de progression d'accomplissement des tâches
  progressRate: number;

  // On fait appel à subscription pour souscrire au sujet du service sans cela on ne recevra pas les mises à jour sur les tâches en BDD
  tasksSubscription: Subscription;

  constructor(private taskService: TaskService) { }

  // A l'initialisation on récupére le nombre de tâches total et celle terminées
  ngOnInit() {
    this.tasksNumberTotal = 0;
    this.tasksDoneTotal = 0;
    this.tasksSubscription = this.taskService.tasksArraySubject.subscribe(
      (tasks: Task[]) => {
        this.tasksArray = tasks;
        this.tasksNumberTotal = tasks.length;
        this.tasksArray.find(
          () => {
            for (let t of tasks) {
              if(t.status === 'done') {
                this.tasksDoneTotal++;
              }
            }
            return this.tasksDoneTotal;
          }
        );
        this.progressRateOperation();
      }
    );
    this.taskService.emitTasksArray();
  }

  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
  }

  // Méthode renvoyant le taux de progression des tâches
  progressRateOperation() {
    return this.progressRate =
      this.tasksDoneTotal / this.tasksNumberTotal * 100;
  }

}
