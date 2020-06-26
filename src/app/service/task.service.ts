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

  editTask(str: string, i: number) {
    return this.taskArray.find[i].name = str;
  }

  deleteTask(i: number) {
    console.log(this.taskArray.splice(i));
  }

  doneTaskStatus(i: number) {
    return this.taskArray.find[i].doneStatus = true;
  }
}
