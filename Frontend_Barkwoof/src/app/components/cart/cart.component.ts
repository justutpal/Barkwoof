import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [], 
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {


  constructor (private http: HttpClient){
    this.http.get('http://localhost:3000/api/about').subscribe((res : any) => {
      console.log(res);
    },  
  (error) => {
    console.error('Error:', error)
  })
  }

}
 