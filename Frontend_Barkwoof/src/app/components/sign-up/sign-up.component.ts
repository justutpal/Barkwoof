import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
   
  formObj : any = {
    fullName : '', 
    email : '',
    phoneNumber : '',
    password : '',
    confrmPassward : ''
  }

  isActive :boolean = false

  userReact : any 

  clickSubmit() {
    this.userReact = this.formObj
    this.isActive = true
  }

}
 