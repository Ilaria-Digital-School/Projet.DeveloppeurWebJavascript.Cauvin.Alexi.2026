import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactForm!: FormGroup;
  infoContact:any = [];

  infoContactID!: any;

  private formBuilder = inject(FormBuilder);
  
  ngOnInit():void{
    this.contactForm = this.formBuilder.group({
      contactID:[0],
      contactName:['', []],
      contactEmail:['', []],
      contactObjet:['', []],
      contactMsg:['', []],
    })
    
  }

  contact(){

    this.infoContactID = Date.now();

    const formValue = this.contactForm.value;

    const infoContactFinal = {
      contactID : this.infoContactID,
      contactName : formValue.contactName,
      contactEmail : formValue.contactEmail,
      contactObjet : formValue.contactObjet,
      contactMsg : formValue.contactMsg,
    
    }

    this.infoContact = JSON.parse(localStorage.getItem('infoContact') || '[]');
    this.infoContact.push(infoContactFinal);
    localStorage.setItem("infoContact", JSON.stringify(this.infoContact));
    alert("Message envoyé avec succés");
    this.contactForm.reset();

  }

}
