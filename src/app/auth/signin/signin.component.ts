import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tdl-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  // A l'initialisation le formulaire se construit
  // Utilisation d'une expression régulière pour avoir un mot de passe valide
  ngOnInit(): void {
    this.signInForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,32}/)]]
      }
    );
  }

  // Méthode se déclencheant à la soumission du formulaire
  // Utilisation du point then car la méthode appelée est asynchrone
  onSubmit() {
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/my-to-do-list']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
