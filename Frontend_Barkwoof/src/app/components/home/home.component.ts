import { Component } from '@angular/core';
import { ProductCategoriesComponent } from "../product-categories/product-categories.component";
import { ProductBedComponent } from '../product-bed/product-bed.component';
import { ProductBeltComponent } from '../product-belt/product-belt.component';
import { ProductBowlComponent } from '../product-bowl/product-bowl.component';
import { ProductCageComponent } from '../product-cage/product-cage.component';
import { DogAccessoriesComponent } from '../dog-accessories/dog-accessories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ProductCategoriesComponent, ProductBedComponent, ProductBeltComponent, 
    ProductBowlComponent, ProductCageComponent, DogAccessoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 text : string = " Products" 
}
 