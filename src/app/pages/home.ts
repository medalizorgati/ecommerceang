import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header';
import { HeroComponent } from '../components/hero';
import { ProductListComponent } from '../components/productlist';
import { FilterSidebarComponent } from '../components/sidebar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, ProductListComponent, FilterSidebarComponent],
  template: `
    <div class="home-container">
      <app-header></app-header>
      <app-hero></app-hero>
      
      <div class="main-content">
        <div class="container">
          <div class="content-layout">
            <app-filter-sidebar></app-filter-sidebar>
            <app-product-list></app-product-list>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: 100vh;
      background: #f8f9fa;
    }
    
    .main-content {
      padding: 2rem 0;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .content-layout {
      display: flex;
      gap: 2rem;
    }
    
    @media (max-width: 768px) {
      .content-layout {
        flex-direction: column;
      }
      
      .container {
        padding: 0 1rem;
      }
    }
  `]
})
export class HomeComponent {}