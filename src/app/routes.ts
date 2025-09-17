import { Routes } from '@angular/router';
import { ProductListComponent } from './components/productlist';
import { ProductDetailsComponent } from './components/productdetails';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent }
];