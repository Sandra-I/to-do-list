import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'tdl-task-in-progress',
  templateUrl: './task-in-progress.component.html',
  styleUrls: ['./task-in-progress.component.scss']
})
export class TaskInProgressComponent implements OnInit {

  // Les différents données requises pour l'affichage d'une tâche
  @Input() name: string;
  @Input() status: string;
  @Input() id: number;
  @Input() index: number;

  // Statut requis pour que la tâche sois affichée
  inProgressStatus = 'inProgress';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  // Méthode pour changer le statut d'une tâche(faite)
  changeStatusDone(id: number) {
    this.taskService.doneTaskStatus(id);
  }

}
