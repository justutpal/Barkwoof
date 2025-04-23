import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-product',
  standalone: true,
  imports: [],
  templateUrl: './reusable-product.component.html',
  styleUrl: './reusable-product.component.css' 
})
export class ReusableProductComponent {

  @Input() routerPlace : string = '' 
  @Input() srcLink : string = ''
  @Input() name : string = ''
  @Input() details : string = ''
  @Input() rating : string = ''
  @Input() numbeOfRating : string = ''
  @Input() mainPrice : string = ''
  @Input() prevPrice : string = ''
  @Input() offer : string = ''
  @Input() addDetails : string = ''
  
}
