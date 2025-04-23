import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReusableProductComponent } from '../reusable-product/reusable-product.component';

@Component({
  selector: 'app-product-bed',
  standalone: true,
  imports: [RouterLink, ReusableProductComponent],
  templateUrl: './product-bed.component.html',
  styleUrl: './product-bed.component.css'
})
export class ProductBedComponent {
 
}
