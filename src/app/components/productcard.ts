import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  currency: string;
  image: string;
  isNewArrival: boolean;
  isOnSale: boolean;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card" (click)="navigateToDetails()">
      <div class="product-image">
        <img [src]="product.image" [alt]="product.name">
        <div class="product-badges">
          <span *ngIf="product.isNewArrival" class="badge new-arrival">New Arrival</span>
        </div>
        <button class="wishlist-btn" (click)="addToWishlist($event)">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <p class="product-brand">{{ product.brand }}</p>
        <h4 class="product-name">{{ product.name }}</h4>
        <div class="product-price">
          <span class="price">{{ product.currency }} {{ product.price.toFixed(2) }}</span>
          <span *ngIf="product.isOnSale" class="sale-badge">12 items left!</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      cursor: pointer;
    }
    
    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }
    
    .product-image {
      position: relative;
      aspect-ratio: 3/4;
      overflow: hidden;
    }
    
    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .product-card:hover .product-image img {
      transform: scale(1.05);
    }
    
    .product-badges {
      position: absolute;
      top: 12px;
      left: 12px;
    }
    
    .badge {
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }
    
    .new-arrival {
      background: #00bcd4;
      color: white;
    }
    
    .wishlist-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      opacity: 0;
    }
    
    .product-card:hover .wishlist-btn {
      opacity: 1;
    }
    
    .wishlist-btn:hover {
      background: white;
      transform: scale(1.1);
    }
    
    .product-info {
      padding: 1rem;
    }
    
    .product-brand {
      color: #666;
      font-size: 0.85rem;
      margin: 0 0 0.25rem 0;
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }
    
    .product-name {
      margin: 0 0 0.75rem 0;
      font-size: 1rem;
      font-weight: 500;
      color: #333;
      line-height: 1.4;
    }
    
    .product-price {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .price {
      font-size: 1rem;
      font-weight: 600;
      color: #2196f3;
    }
    
    .sale-badge {
      font-size: 0.75rem;
      color: #ff5722;
      font-weight: 500;
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
  
  constructor(private router: Router) {}
  
  navigateToDetails() {
    this.router.navigate(['/product', this.product.id]);
  }
  
  addToWishlist(event: Event) {
    event.stopPropagation(); // Prevent triggering the card click
    // Add wishlist functionality here
    console.log('Added to wishlist:', this.product.name);
  }
}