import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'tdl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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

  onSignOut() {
    this.authService.signOutUser();
  }

}
