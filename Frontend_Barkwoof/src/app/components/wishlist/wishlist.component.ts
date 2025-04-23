import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  srcLink: string = 'bed.png'
  name: string = 'Bed'
  details: string = 'Pink'
  rating: string = '4.3'
  numbeOfRating: string = '94,345'
  mainPrice: string = '1000'
  prevPrice: string = '2000'
  offer: string = '50%'

  fillInfo(data :any) {
    console.log(data);
    
  }

}
