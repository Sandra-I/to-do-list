import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'tdl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAHtSFwVFZR2KYJOQKCt-90jsfBJ7OisdQ",
      authDomain: "to-do-list-8764c.firebaseapp.com",
      databaseURL: "https://to-do-list-8764c.firebaseio.com",
      projectId: "to-do-list-8764c",
      storageBucket: "to-do-list-8764c.appspot.com",
      messagingSenderId: "529957585683",
      appId: "1:529957585683:web:78c8e7a574340ae22e10e6",
      measurementId: "G-K8M25192ZW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
