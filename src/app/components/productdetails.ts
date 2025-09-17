import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './productcard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-details">
      <div class="product-image">
        <img [src]="product?.image" [alt]="product?.name">
      </div>
      <div class="product-info">
        <h1>{{ product?.name }}</h1>
        <p><strong>Brand:</strong> {{ product?.brand }}</p>
        <p><strong>Price:</strong> {{ product?.currency }} {{ product?.price?.toFixed(2) }}</p>
        <p *ngIf="product?.isNewArrival" class="badge new-arrival">New Arrival</p>
        <p *ngIf="product?.isOnSale" class="badge sale">On Sale</p>
      </div>
    </div>
  `,
  styles: [`
    .product-details {
      display: flex;
      gap: 2rem;
      padding: 2rem;
      background: #f8f9fa;
    }
    .product-image img {
      max-width: 300px;
      border-radius: 8px;
    }
    .product-info {
      flex: 1;
    }
    .badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 15px;
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: 1rem;
    }
    .new-arrival {
      background: #00bcd4;
      color: white;
    }
    .sale {
      background: #ff5722;
      color: white;
    }
  `]
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.getProductById(productId);
  }

  getProductById(id: number): Product | undefined {
    const products: Product[] = [
      { id: 1, name: 'Product 1', brand: 'Brand A', price: 29.99, currency: '$', image: 'https://via.placeholder.com/150', isNewArrival: true, isOnSale: false },
      { id: 2, name: 'Product 2', brand: 'Brand B', price: 49.99, currency: '$', image: 'https://via.placeholder.com/150', isNewArrival: false, isOnSale: true },
      { id: 3, name: 'Product 3', brand: 'Brand C', price: 19.99, currency: '$', image: 'https://via.placeholder.com/150', isNewArrival: false, isOnSale: false },
      { id: 4, name: 'Product 4', brand: 'Brand D', price: 39.99, currency: '$', image: 'https://via.placeholder.com/150', isNewArrival: true, isOnSale: true }
    ];

    return products.find(product => product.id === id);
  }
}