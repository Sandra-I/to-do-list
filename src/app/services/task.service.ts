import { Task } from '../models/task.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class TaskService {

  // Le tableau des tâches
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

  // Méthode renvoyant le tableau de tâches
  // .on permet la réaction aux modifs dans la base de données par événement
  getTasksArray(): any {
    firebase.database().ref('/tasks').on('value', (data) => {
      this.tasksArray = data.val() ? data.val() : [];
      this.emitTasksArray();
    }
    );
  }

  // Méthode enregistrer la liste
  // le set est une méthode fournit par Firebase pour ajouter dans la BDD l'argument fourni seulement s'il n'existe pas encore
  saveTasks() {
    firebase.database().ref('/tasks').set(this.tasksArray);
  }

  // Méthode pour ajouter une tâche
  addTaskToDo(newTask: Task) {
    // newTask.status = null;
    // newTask.id = this.tasksArray[(this.tasksArray.length)-1].id +1;
    this.tasksArray.push(newTask);
    this.saveTasks();
    this.emitTasksArray();
  }

  // Méthode pour changer le statut d'un tâche à vrai (donc à true)
  editTask(id: number, str: string) {
    this.tasksArray.find(
      task => task.id === id
    ).name = str;
  }

  // Méthode pour supprimer une tâche définitivement de la liste à faire
  deleteTask(task: Task) {
    const taskIndexToRemove = this.tasksArray.findIndex(
      (taskEl) => {
        if(taskEl === task) {
          return true;
        }
      }
      );
      this.tasksArray.splice(taskIndexToRemove, 1);
      this.saveTasks();
      this.emitTasksArray();
  }

  // Méthode pour changer le statut d'un tâche à vrai (donc à true)
  doneTaskStatus(id: number) {
    this.tasksArray.find(
      task => task.id === id
      ).status = true;
  }

  // Méthode pour changer le statut d'un tâche à faux (donc à false)
  inProgressTaskStatus(id: number) {
    this.tasksArray.find(
      task => task.id === id
      ).status = false;
  }
}
