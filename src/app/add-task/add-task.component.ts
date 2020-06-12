import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'tdl-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  title: 'Ajouter une tâche';

  @Input() taskToAdd: string;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  public onAddTask(form: NgForm): void {
    this.taskToAdd = form.value['taskToAdd'];
    this.taskService.addTaskToDo(this.taskToAdd);
    console.log(this.taskService.getTaskArray());
  }

  // A retravailler surement pour la modification
  // public onAddTask(form: NgForm): string {
  //   this.taskToAdd = form.value['taskToAdd'];
  //   //this.cli.emit(this.taskToAdd);
  //   this.cli.emit();
  //   console.log(form.value['taskToAdd']);
  //   return this.taskToAdd;
  // }
    // A retravailler
  // @Output()
  // cli: EventEmitter<string> = new EventEmitter();

}
