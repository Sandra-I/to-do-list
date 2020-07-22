import { Task } from '../models/task.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class TaskService {

  // Le tableau des tâches local
  tasksArray: Task[] = [];
  // Sujet qui va émettre le tableau ci-dessus
  tasksArraySubject = new Subject<Task[]> ();

  constructor() {
    this.getTasksArray();
  }

  // Méthode pour faire émettre le subject
  emitTasksArray() {
    this.tasksArraySubject.next(this.tasksArray);
  }

  // Méthode récuperant le tableau de tâches sur le serveur
  // .on permet la réaction aux modifs dans la base de données par événement
  // si l'array est vide on recevra un tableau vide
  getTasksArray(): any {
    firebase.database().ref('/tasks')
    .on('value', (data: DataSnapshot) => {
      this.tasksArray = data.val() ? data.val() : [];
      this.emitTasksArray();
      }
    );
  }

  // Méthode enregistrant le tableau des tâches sur le serveur
  // le set est une méthode fournit par Firebase pour ajouter dans la BDD l'argument fourni seulement s'il n'existe pas encore
  saveTasks() {
    firebase.database().ref('/tasks').set(this.tasksArray);
  }

  // Méthode pour ajouter une nouvelle tâche
  addTaskToDo(newTask: Task) {
    this.tasksArray.push(newTask);
    this.saveTasks();
    this.emitTasksArray();
  }

  // Méthode pour supprimer une tâche définitivement de la liste à faire
  deleteTask(id: number) {
    const taskIndexToRemove = this.tasksArray.findIndex(
      (taskEl) => {
        if(taskEl.id === id) {
          return true;
        }
      }
    );
    this.tasksArray.splice(taskIndexToRemove, 1);
    this.saveTasks();
    this.emitTasksArray();
  }

  // Méthode pour changer mettre à jour le nom d'une tâche
  editTask(id: number, str: string) {
    this.tasksArray.find(
      taskEl => taskEl.id === id
    ).name = str;
    this.saveTasks();
    this.emitTasksArray();
  }

  // Méthode pour passer à en cours le statut d'une tâche
  inProgressTaskStatus(id: number) {
    this.tasksArray.find(
      taskEl => taskEl.id === id
    ).status = 'inProgress';
    this.saveTasks();
    this.emitTasksArray();
  }

  // Méthode pour passer à terminer le statut d'une tâche
  doneTaskStatus(id: number) {
    this.tasksArray.find(
      taskEl => taskEl.id === id
    ).status = 'done';
    this.saveTasks();
    this.emitTasksArray();
  }
}
