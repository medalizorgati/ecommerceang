import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent, Product } from './productcard';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="product-list-container">
      <div class="breadcrumb">
        <a href="#" class="breadcrumb-link">Home</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">Clothes</span>
      </div>
      
      <div class="list-header">
        <h2 class="results-title">result for clothes</h2>
        <div class="list-controls">
          <div class="view-toggle">
            <button class="view-btn active">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>

                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button class="view-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="sort-control">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18l-2-3H5l-2 3z"></path>
              <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
            </svg>
            <span>Sort by:</span>
            <select class="sort-select">
              <option>Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </div>
      
      <div class="product-grid">
        <app-product-card *ngFor="let product of products" [product]="product" (click)="viewDetails(product)"></app-product-card>
      </div>
    </div>
  `,
  styles: [`
    .product-list-container {
      flex: 1;
    }
    
    .breadcrumb {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
    }
    
    .breadcrumb-link {
      color: #00bcd4;
      text-decoration: none;
    }
    
    .breadcrumb-link:hover {
      text-decoration: underline;
    }
    
    .breadcrumb-separator {
      margin: 0 0.5rem;
      color: #666;
    }
    
    .breadcrumb-current {
      color: #666;
    }
    
    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    
    .results-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
    }
    
    .list-controls {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    
    .view-toggle {
      display: flex;
      gap: 0.5rem;
    }
    
    .view-btn {
      width: 36px;
      height: 36px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    
    .view-btn:hover {
      border-color: #00bcd4;
    }
    
    .view-btn.active {
      background: #00bcd4;
      border-color: #00bcd4;
      color: white;
    }
    
    .sort-control {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      color: #666;
    }
    
    .sort-select {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 0.5rem;
      background: white;
      color: #333;
      font-size: 0.9rem;
    }
    
    .product-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
    
    @media (max-width: 768px) {
      .list-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
      
      .list-controls {
        width: 100%;
        justify-content: space-between;
      }
      
      .product-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
      }
    }
    
    @media (max-width: 480px) {
      .product-grid {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
    }
  `]
})
export class ProductListComponent implements OnInit {
  product?: Product;
  constructor(private router: Router, private route: ActivatedRoute) {}

  products: Product[] = [
    {
      id: 1,
      name: 'Shirt Soft Cotton',
      brand: 'Uniqlo',
      price: 40.00,
      currency: 'SAR',
      image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNewArrival: true,
      isOnSale: true
    },
    {
      id: 2,
      name: 'Zip Up Neck Shirt',
      brand: 'Uniqlo',
      price: 45.00,
      currency: 'SAR',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNewArrival: true,
      isOnSale: true
    },
    {
      id: 3,
      name: 'Classic Long Sleeve',
      brand: 'Uniqlo',
      price: 40.00,
      currency: 'SAR',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNewArrival: true,
      isOnSale: true
    },
    {
      id: 4,
      name: 'Shirt Soft Cotton',
      brand: 'Uniqlo',
      price: 42.00,
      currency: 'SAR',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNewArrival: true,
      isOnSale: false
    },
    {
      id: 5,
      name: 'Shirt Soft Cotton',
      brand: 'Uniqlo',
      price: 38.00,
      currency: 'SAR',
      image: 'https://images.pexels.com/photos/1043143/pexels-photo-1043143.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNewArrival: true,
      isOnSale: false
    },
    {
      id: 6,
      name: 'Shirt Soft Cotton',
      brand: 'Uniqlo',
      price: 44.00,
      currency: 'SAR',
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNewArrival: true,
      isOnSale: false
    }
  ];

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Product ID:', productId);
    this.product = this.getProductById(productId);
  }

  viewDetails(product: Product) {
    this.router.navigate(['/product-details', product.id]);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}