// Classe correspondant au model d'une tâche
export class Task {

  // syntaxe permettant l'utilisation du mot-clès new sans avoir définir les attributs avant le constructeur
  constructor(public id: number, public name: string, public status: string) {}
}
