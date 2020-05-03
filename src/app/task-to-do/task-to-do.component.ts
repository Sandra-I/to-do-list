import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdl-task-to-do',
  templateUrl: './task-to-do.component.html',
  styleUrls: ['./task-to-do.component.scss']
})
export class TaskToDoComponent implements OnInit {

  taskToDo = [
    {
      name: 'Tester liaison des donées'
    },
    {
      name: 'Programmer action des boutons'
    },
    {
      name: 'Ajouter une animation lors validation tâche à faire'
    },
    {
      name: 'Ajouter la date et l\'heure de la création de la tâche'
    },
    {
      name: 'Travailler le rendu visuel + responsive'
    },
    {
      name: 'Tester la transformation en PWA'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
