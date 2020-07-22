import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

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

  // Méthode pour ajouter une tâche
  public onAddTask(form: NgForm): void {
    const id = this.taskService.tasksArray.length + 1;
    const name = form.value['taskToAdd'];
    const status = 'toDo';
    const newTask = new Task(id, name, status);
    this.taskService.addTaskToDo(newTask);
    this.taskToAdd = '';
  }

}
