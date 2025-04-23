import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReusableProductComponent } from '../reusable-product/reusable-product.component';

@Component({
  selector: 'app-dog-accessories',
  standalone: true,
  imports: [RouterLink, ReusableProductComponent],
  templateUrl: './dog-accessories.component.html',
  styleUrl: './dog-accessories.component.css'
})
export class DogAccessoriesComponent {

}
