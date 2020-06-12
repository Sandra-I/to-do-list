import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tdl-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  title: 'Ajouter une tâche';

  @Input()
  taskToAdd: string;

  // A retravailler
  // @Output()
  // cli: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // A retravailler
  // public onAddTask(form: NgForm): string {
  //   this.taskToAdd = form.value['taskToAdd'];
  //   //this.cli.emit(this.taskToAdd);
  //   this.cli.emit();
  //   console.log(form.value['taskToAdd']);
  //   return this.taskToAdd;
  // }

}
