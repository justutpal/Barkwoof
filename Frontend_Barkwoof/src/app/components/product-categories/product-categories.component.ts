import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReusableProductComponent } from '../reusable-product/reusable-product.component';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [RouterLink, ReusableProductComponent],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.css'
})
export class ProductCategoriesComponent {

}
