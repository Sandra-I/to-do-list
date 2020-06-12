import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tdl-task-to-do',
  templateUrl: './task-to-do.component.html',
  styleUrls: ['./task-to-do.component.scss']
})
export class TaskToDoComponent implements OnInit {

  @Input()
  taskToDo: string;

  tasksToDo: string[];

  public addTask(name: string): string {
    this.taskToDo = name;
    console.log("Task to do" + this.taskToDo);
    return this.taskToDo;
  }

  constructor() { }

  ngOnInit(): void {
    this.taskToDo = "Aucune tâche à réaliser pour le moment !"
  }

}
