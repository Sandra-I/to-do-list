import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Méthode pour la création d'un nouvel utilisateur
  // Utilisation de Promise car c'est une méthode asynchrone
  //  .auth permet d'avoir accès aux méthodes d'authentification
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // Méthode pour la connexion d'un utlisateur
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // Méthode pour se déconnecter
  signOutUser() {
    firebase.auth().signOut();
  }

}
