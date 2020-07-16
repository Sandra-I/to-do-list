import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'tdl-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  // Titre associé au bouton
  title = "Ajouter une tâche";

  // Input pour la tâche à ajouter
  @Input() taskToAdd: string;

  // Etat par défaut du bloc input = caché
  public isCollapsed = true;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  // Méthode pour ajouter une tâche en passant la valeur de l'input au service
  // A RETRAVAILLER
  // public onAddTask(form: NgForm): void {
  //   this.taskToAdd = form.value['taskToAdd'];
  //   this.taskService.addTaskToDo(this.taskToAdd);
  //   this.taskToAdd = '';
  // }

}
