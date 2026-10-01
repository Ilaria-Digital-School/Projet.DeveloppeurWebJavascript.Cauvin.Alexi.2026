import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  signupForm!: FormGroup;
  users:any = [];

  private formBuilder = inject(FormBuilder);

  private userService = inject(UserService);

  private router = inject(Router);

  ngOnInit():void{
    this.signupForm = this.formBuilder.group({
      userName:['',[Validators.required]],
      email:['',[Validators.required]],
      pwd:['',[Validators.required]],
      confirmMdp:['',[Validators.required]],
    },
    {
      validators: this.passwordMatchValidator
    });
  }

  loadUsers(){
    this.userService.getAllUsers().subscribe({
      next: (res:any) => {
        this.users = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        alert("Erreur lors de la récupération des utilisateurs");
      }
    });
  }

  passwordMatchValidator(control: AbstractControl){

    // Récupérer le mdp 
    const pwd = control.get('pwd')?.value;
    const confirmMdp = control.get('confirmMdp')?.value;

    // Vérifier s'ils sont identiques
    if(pwd !== confirmMdp){ return {passwordMissmatch:true}};

    // Les 2 mdps sont iidentiques
    return null;

  }

  signup(){

    const formValue = this.signupForm.value;

    // Transforme / Ajouter les checkboxs

    let interets = [];

    if(formValue.clothes){
      interets.push('clothes');
    }

    if(formValue.accesories){
      interets.push('accesories');
    }

    // Créer l'objet final

    const userFinal = {
      userName : formValue.userName,
      email : formValue.email,
      pwd : formValue.pwd,
      confirmMdp : formValue.confirmMdp,
      role: "Utilisateur"
    }

    this.userService.addUser(userFinal).subscribe({
      next : (res:any) => {
        alert("utilisateur créé avec succès");
        this.router.navigate(["/connexion"])
      },
      error : (err) => {
        console.log(err);
        alert("Erreur lors de la création")
      }
    })

    this.users = JSON.parse(localStorage.getItem('user') || '[]');
    this.users.push(userFinal);
    localStorage.setItem("users", JSON.stringify(this.users));
    alert("Compte créé avec succés");

  }

}
