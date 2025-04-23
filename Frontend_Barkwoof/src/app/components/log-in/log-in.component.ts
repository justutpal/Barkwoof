import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  logObj: any = {
    email: '',
    passward: '',
  }; 

  isActive: boolean = false;

  mainObj: any;

  router = inject(Router);

  submit() {
    if (this.logObj.email == 'admin' && this.logObj.passward == '123') {
      localStorage.setItem('loginUser', this.logObj.email);
      this.router.navigateByUrl('home');
      setTimeout(() => {
        location.reload();
      }, 100);
    } else {
      alert('Please use correct Credentials.');
    }
  }
}
