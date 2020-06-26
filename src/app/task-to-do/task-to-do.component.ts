import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'tdl-task-to-do',
  templateUrl: './task-to-do.component.html',
  styleUrls: ['./task-to-do.component.scss']
})
export class TaskToDoComponent implements OnInit {

  @Input() name: string;
  @Input() status: string;
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
