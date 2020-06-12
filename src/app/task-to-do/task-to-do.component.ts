import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tdl-task-to-do',
  templateUrl: './task-to-do.component.html',
  styleUrls: ['./task-to-do.component.scss']
})
export class TaskToDoComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

  // public addTask(name: string): string {
  //   this.name = name;
  //   console.log("Task to do" + this.name);
  //   return this.name;
  // }

}
