import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'My To Do List';
  constructor() { }

  ngOnInit(): void {
  }

}
