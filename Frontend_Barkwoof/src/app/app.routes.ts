import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProductBedComponent } from './components/product-bed/product-bed.component';
import { ProductBeltComponent } from './components/product-belt/product-belt.component';
import { ProductBowlComponent } from './components/product-bowl/product-bowl.component';
import { DogAccessoriesComponent } from './components/dog-accessories/dog-accessories.component';
import { ProductCageComponent } from './components/product-cage/product-cage.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { authGuard } from './components/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LogInComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product_bed',
    component: ProductBedComponent,
  },
  {
    path: 'product_belt',
    component: ProductBeltComponent,
  },
  {
    path: 'product_bowl',
    component: ProductBowlComponent,
  },
  {
    path: 'product_cage',
    component: ProductCageComponent,
  },
  {
    path: 'dog_accessories',
    component: DogAccessoriesComponent,
  },
  {
    path: 'sign_up',
    component: SignUpComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuard],
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [authGuard],
  },
];
