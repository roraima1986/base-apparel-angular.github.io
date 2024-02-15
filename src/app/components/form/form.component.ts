import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  // Variable para evitar que se muestre el mensaje de error antes de enviar
  submitted: boolean = false;

  //Variable del formulario con sus validaciones
  myForm:FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email] ]
  })

  constructor(private fb: FormBuilder) {}

  // Evento para enviar el email del formulario
  onSubmit():void {

    this.submitted = true;

    if(this.myForm.valid) {

      setTimeout(() => {
        alert(`The ${this.myForm.controls['email'].value} was sent successfully`);
        this.myForm.reset();
        this.submitted = false;
      }, 500)

    }
  }

}
