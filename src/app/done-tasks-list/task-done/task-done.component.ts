import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tdl-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.scss']
})
export class TaskDoneComponent implements OnInit {

  // Les différents données requises pour l'affichage d'une tâche
  @Input() name: string;
  @Input() status: boolean;
  @Input() id: number;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
