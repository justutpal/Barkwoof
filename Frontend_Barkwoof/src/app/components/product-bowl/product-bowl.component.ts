import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReusableProductComponent } from '../reusable-product/reusable-product.component';

@Component({
  selector: 'app-product-bowl',
  standalone: true,
  imports: [RouterLink, ReusableProductComponent],
  templateUrl: './product-bowl.component.html',
  styleUrl: './product-bowl.component.css'
})
export class ProductBowlComponent {

}
