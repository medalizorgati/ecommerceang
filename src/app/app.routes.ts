import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { ProductDetailsComponent } from './components/productdetails';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: '/home' }
];
