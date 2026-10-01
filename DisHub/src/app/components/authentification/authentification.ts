import { Component } from '@angular/core';
import { Signup } from '../signup/signup';
import { Signin } from '../signin/signin';

@Component({
  selector: 'app-authentification',
  imports: [Signup, Signin],
  templateUrl: './authentification.html',
  styleUrl: './authentification.css',
})
export class Authentification {

  inscriptionActive = false;

  afficherInscription(): void {
    this.inscriptionActive = true;
  }

  afficherConnexion(): void {
    this.inscriptionActive = false;
  }

}
