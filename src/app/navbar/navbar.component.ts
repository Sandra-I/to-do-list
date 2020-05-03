import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbar = {
    title: 'Ajouter une tâche'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
