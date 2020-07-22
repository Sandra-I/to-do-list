import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'tdl-task-to-do',
  templateUrl: './task-to-do.component.html',
  styleUrls: ['./task-to-do.component.scss']
})
export class TaskToDoComponent implements OnInit {

  // Les différents données requises pour l'affichage d'une tâche
  @Input() name: string;
  @Input() status: string;
  @Input() id: number;
  @Input() index: number;

  // Statut requis pour que la tâche sois affichée
  toDoStatus = 'toDo';

  // Etat par défaut du bloc input = caché
  public isCollapsed = true;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  // Méthode pour changer le nom de la tâche
  editTaskName(id: number, form: NgForm) {
    const name = form.value['taskToUpdate'];
    this.taskService.editTask(id, name);
    this.isCollapsed = true;
  }

  // Méthode pour changer le statut d'une tâche (en cours)
  changeStatusProgress(id: number) {
    this.taskService.inProgressTaskStatus(id);
  }

  // Méthode pour supprimer une tâche de la liste
  // Avec une alerte pour confirmer le choix
  removeTask(id: number) {
    if(confirm('Etes-vous sûr de vouloir supprimer définitivement cette tâche ?')) {
      this.taskService.deleteTask(id);
    } else {
      return null;
    }
  }

}
