import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'tdl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // Titre de la page
  title = 'My To Do List';

  // Etat par défaut du bloc menu = caché
  public isCollapsed = true;

  isAuth: boolean;

  constructor(private authService: AuthService) { }

  // Méthode à l'initialisation du component on récupére le statut de l'utilisateur grâce à l'objet user qu'on récupère via la méthode onAuthStateChanged
  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  // Mthode de déconnexion
  onSignOut() {
    this.authService.signOutUser();
  }

  ngOnDestroy() {
    this.onSignOut();
  }

}
