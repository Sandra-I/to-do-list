import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'tdl-task-to-do',
  templateUrl: './task-to-do.component.html',
  styleUrls: ['./task-to-do.component.scss']
})
export class TaskToDoComponent implements OnInit {

  // Les différents données requises pour l'affichage d'une tâche
  @Input() name: string;
  @Input() status: boolean;
  @Input() id: number;
  @Input() index: number;

  // Etat par défaut du bloc input = caché
  public isCollapsed = true;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  // Méthode pour changer le nom de la tâche
  editTaskName(id: number, name: string) {
    this.taskService.editTask(id, name);
    this.isCollapsed = true;
  }

  // Méthode pour changer le statut d'une tâche (en cours)
  changeStatusProgress(id: number) {
    this.taskService.inProgressTaskStatus(id);
  }

  // Méthode pour supprimer une tâche de la liste
  // Penser à rajouter une alerte pour confirmer le choix
  removeTask(id: number) {
    this.taskService.deleteTask(id);
  }

}
