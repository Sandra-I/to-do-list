export class TaskService {

  // Le tableau des tâches
  private taskArray = [
    {
      id:  1,
      name : "Test tâche",
      doneStatus : false
    },
    {
      id:  2,
      name : "Test une autre tâche",
      doneStatus : null
    },
    {
      id:  3,
      name : "Test encore une autre tâche",
      doneStatus : true
    }
  ];

  // Méthode renvoyant le tableau de tâches
  getTaskArray() {
    return this.taskArray;
  }

  // Méthode pour ajouter une tâche
  // la constante newTask permets de créer par défaut un objet qu'on va modifier avec les données reçues puis le pousser dans notre tableau de tâches
  addTaskToDo(str: string) {
    const newTask = {
      id: 0,
      name: '',
      doneStatus: null
    }
    newTask.name = str;
    newTask.doneStatus = null;
    newTask.id = this.taskArray[(this.taskArray.length)-1].id +1;
    this.taskArray.push(newTask);
  }

  // Méthode pour changer le statut d'un tâche à vrai (donc à true)
  editTask(id: number, str: string) {
    this.taskArray.find(
      task => task.id === id
    ).name = str;
  }

  // Méthode pour supprimer une tâche définitivement de la liste à faire
  // A REVOIR
  deleteTask(id: number) {
    this.taskArray.splice(id, 1);
  }

  // Méthode pour changer le statut d'un tâche à vrai (donc à true)
  doneTaskStatus(id: number) {
    this.taskArray.find(
      task => task.id === id
    ).doneStatus = true;
  }

  // Méthode pour changer le statut d'un tâche à faux (donc à false)
  inProgressTaskStatus(id: number) {
    this.taskArray.find(
      task => task.id === id
    ).doneStatus = false;
  }
}
