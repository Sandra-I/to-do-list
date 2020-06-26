export class TaskService {

  // Le tableau des tâches
  private taskArray = [
    {
      id:  1,
      name : "Service ok",
      doneStatus : false
    },
    {
      id:  2,
      name : "Service 2 ok",
      doneStatus : false
    },
    {
      id:  3,
      name : "Service 3 ok",
      doneStatus : true
    },
    {
      id:  4,
      name : "Service 4 ok",
      doneStatus : true
    },
    {
      id:  5,
      name : "Service 5 ok",
      doneStatus : false
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
    newTask.doneStatus = false;
    newTask.id = this.taskArray[(this.taskArray.length)-1].id +1;
    this.taskArray.push(newTask);
  }

  editTask(str: string, id: number) {
    return this.taskArray.find[id].name = str;
  }

  // Méthode pour supprimer une tâche définitivement de la liste à faire
  // Penser à rajouter une alerte pour confirmer le choix
  deleteTask(id: number) {
    this.taskArray.splice(id, 1);
    console.log(this.taskArray);
  }

  // Méthode pour changer le statut d'un tâche à vrai (donc à true)
  doneTaskStatus(id: number) {
    this.taskArray.find[id].doneStatus = true;
  }
}
