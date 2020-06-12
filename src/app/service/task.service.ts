import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskArray = [
    {
      name : "Service ok",
      doneStatus : false
    },
    {
      name : "Service 2 ok",
      doneStatus : false
    },
    {
      name : "Service 3 ok",
      doneStatus : true
    },
    {
      name : "Service 4 ok",
      doneStatus : true
    },
    {
      name : "Service 5 ok",
      doneStatus : false
    }
  ]

  constructor() { }

  getTaskArray() {
    return this.taskArray;
  }

  addTaskToDo(str: string) {
    return this.taskArray.push({name: str, doneStatus: false});
  }

  // doneTaskStatus(i: number) {
  //   return this.taskArray.find[i].doneStatus = true;
  // }

  // updateTask(str: string, i: number) {
  //   return this.taskArray.find[i].name = str;
  // }

  // deleteTask(i: number) {
  //   return this.taskArray.splice(0);
  // }


}
