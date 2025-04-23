import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReusableProductComponent } from '../reusable-product/reusable-product.component';

@Component({
  selector: 'app-product-belt',
  standalone: true,
  imports: [RouterLink, ReusableProductComponent],
  templateUrl: './product-belt.component.html',
  styleUrl: './product-belt.component.css'
})
export class ProductBeltComponent {

}
