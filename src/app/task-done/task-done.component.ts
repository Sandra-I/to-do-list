import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tdl-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.scss']
})
export class TaskDoneComponent implements OnInit {

  @Input() name: string;
  @Input() status: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
