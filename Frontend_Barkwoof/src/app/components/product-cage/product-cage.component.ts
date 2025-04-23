import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReusableProductComponent } from '../reusable-product/reusable-product.component';

@Component({
  selector: 'app-product-cage',
  standalone: true,
  imports: [RouterLink, ReusableProductComponent],
  templateUrl: './product-cage.component.html',
  styleUrl: './product-cage.component.css'
})
export class ProductCageComponent {

}
