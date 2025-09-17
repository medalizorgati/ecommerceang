import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './productcard';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-details-container" *ngIf="product">
      <!-- Header with back button -->
      <div class="header">
        <button class="back-btn" (click)="goBack()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Back to Products
        </button>
        <div class="breadcrumb">
          <span>Home</span>
          <span class="separator">></span>
          <span>Products</span>
          <span class="separator">></span>
          <span class="current">{{ product.name }}</span>
        </div>
      </div>

      <!-- Product Details -->
      <div class="product-content">
        <div class="product-image-section">
          <div class="main-image">
            <img [src]="product.image" [alt]="product.name">
            <div class="image-badges">
              <span *ngIf="product.isNewArrival" class="badge new-arrival">New Arrival</span>
              <span *ngIf="product.isOnSale" class="badge on-sale">On Sale</span>
            </div>
          </div>
          <div class="thumbnail-images">
            <img [src]="product.image" [alt]="product.name" class="thumbnail active">
            <img [src]="product.image" [alt]="product.name" class="thumbnail">
            <img [src]="product.image" [alt]="product.name" class="thumbnail">
            <img [src]="product.image" [alt]="product.name" class="thumbnail">
          </div>
        </div>

        <div class="product-info-section">
          <div class="product-header">
            <p class="brand">{{ product.brand }}</p>
            <h1 class="product-title">{{ product.name }}</h1>
            <div class="rating">
              <div class="stars">
                <span *ngFor="let star of [1,2,3,4,5]" class="star filled">★</span>
              </div>
              <span class="rating-text">(4.8) 156 reviews</span>
            </div>
          </div>

          <div class="price-section">
            <div class="price">
              <span class="current-price">{{ product.currency }} {{ product.price.toFixed(2) }}</span>
              <span *ngIf="product.isOnSale" class="original-price">{{ product.currency }} {{ (product.price * 1.3).toFixed(2) }}</span>
            </div>
            <div *ngIf="product.isOnSale" class="discount">Save 23%</div>
          </div>

          <div class="product-options">
            <div class="size-selection">
              <h3>Size</h3>
              <div class="size-options">
                <button *ngFor="let size of sizes" 
                        class="size-btn" 
                        [class.selected]="selectedSize === size"
                        (click)="selectSize(size)">
                  {{ size }}
                </button>
              </div>
            </div>

            <div class="color-selection">
              <h3>Color</h3>
              <div class="color-options">
                <button *ngFor="let color of colors" 
                        class="color-btn" 
                        [style.background-color]="color.value"
                        [class.selected]="selectedColor === color.name"
                        (click)="selectColor(color.name)"
                        [title]="color.name">
                </button>
              </div>
            </div>

            <div class="quantity-selection">
              <h3>Quantity</h3>
              <div class="quantity-controls">
                <button class="qty-btn" (click)="decreaseQuantity()">-</button>
                <span class="quantity">{{ quantity }}</span>
                <button class="qty-btn" (click)="increaseQuantity()">+</button>
              </div>
            </div>
          </div>

          <div class="action-buttons">
            <button class="add-to-cart-btn" (click)="addToCart()">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Add to Cart
            </button>
            <button class="buy-now-btn" (click)="buyNow()">
              Buy Now
            </button>
            <button class="wishlist-btn" (click)="addToWishlist()">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>

          <div class="product-features">
            <div class="feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <span>Free shipping on orders over SAR 200</span>
            </div>
            <div class="feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9,22 9,12 15,12 15,22"></polyline>
              </svg>
              <span>30-day return policy</span>
            </div>
            <div class="feature">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <span>Fast delivery in 2-3 business days</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Description -->
      <div class="product-description">
        <h2>Product Description</h2>
        <p>This premium {{ product.name.toLowerCase() }} from {{ product.brand }} combines comfort and style perfectly. Made with high-quality materials, it's designed to last while keeping you looking great. Perfect for both casual and semi-formal occasions.</p>
        
        <div class="specifications">
          <h3>Specifications</h3>
          <ul>
            <li><strong>Material:</strong> 100% Cotton</li>
            <li><strong>Care Instructions:</strong> Machine wash cold, tumble dry low</li>
            <li><strong>Fit:</strong> Regular fit</li>
            <li><strong>Origin:</strong> Made in Turkey</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Loading state -->
    <div *ngIf="!product" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading product details...</p>
    </div>
  `,
  styles: [`
    .product-details-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      background: #f8f9fa;
      min-height: 100vh;
    }

    .header {
      margin-bottom: 2rem;
    }

    .back-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: none;
      border: none;
      color: #00bcd4;
      cursor: pointer;
      font-size: 1rem;
      margin-bottom: 1rem;
      padding: 0.5rem 0;
      transition: color 0.2s ease;
    }

    .back-btn:hover {
      color: #0097a7;
    }

    .breadcrumb {
      font-size: 0.9rem;
      color: #666;
    }

    .separator {
      margin: 0 0.5rem;
    }

    .current {
      color: #333;
      font-weight: 500;
    }

    .product-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }

    .product-image-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .main-image {
      position: relative;
      aspect-ratio: 4/5;
      border-radius: 8px;
      overflow: hidden;
    }

    .main-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-badges {
      position: absolute;
      top: 1rem;
      left: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .badge {
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .new-arrival {
      background: #00bcd4;
      color: white;
    }

    .on-sale {
      background: #ff5722;
      color: white;
    }

    .thumbnail-images {
      display: flex;
      gap: 0.5rem;
    }

    .thumbnail {
      width: 80px;
      height: 80px;
      border-radius: 6px;
      object-fit: cover;
      cursor: pointer;
      border: 2px solid transparent;
      transition: border-color 0.2s ease;
    }

    .thumbnail.active {
      border-color: #00bcd4;
    }

    .product-info-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .brand {
      color: #666;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0;
    }

    .product-title {
      font-size: 2rem;
      font-weight: 600;
      color: #333;
      margin: 0;
      line-height: 1.2;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .stars {
      color: #ffc107;
    }

    .rating-text {
      color: #666;
      font-size: 0.9rem;
    }

    .price-section {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .current-price {
      font-size: 1.75rem;
      font-weight: 700;
      color: #2196f3;
    }

    .original-price {
      font-size: 1.25rem;
      color: #999;
      text-decoration: line-through;
    }

    .discount {
      background: #4caf50;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .product-options {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .product-options h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
      font-weight: 600;
      color: #333;
    }

    .size-options {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .size-btn {
      padding: 0.5rem 1rem;
      border: 2px solid #ddd;
      border-radius: 6px;
      background: white;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .size-btn:hover {
      border-color: #00bcd4;
    }

    .size-btn.selected {
      background: #00bcd4;
      color: white;
      border-color: #00bcd4;
    }

    .color-options {
      display: flex;
      gap: 0.5rem;
    }

    .color-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid #ddd;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .color-btn.selected {
      border-color: #333;
      transform: scale(1.1);
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .qty-btn {
      width: 40px;
      height: 40px;
      border: 2px solid #ddd;
      border-radius: 6px;
      background: white;
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .qty-btn:hover {
      border-color: #00bcd4;
      color: #00bcd4;
    }

    .quantity {
      font-size: 1.2rem;
      font-weight: 600;
      min-width: 2rem;
      text-align: center;
    }

    .action-buttons {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .add-to-cart-btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem;
      background: #00bcd4;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .add-to-cart-btn:hover {
      background: #0097a7;
    }

    .buy-now-btn {
      flex: 1;
      padding: 1rem;
      background: #ff5722;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .buy-now-btn:hover {
      background: #e64a19;
    }

    .wishlist-btn {
      width: 50px;
      height: 50px;
      border: 2px solid #ddd;
      border-radius: 8px;
      background: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .wishlist-btn:hover {
      border-color: #ff5722;
      color: #ff5722;
    }

    .product-features {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 8px;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.9rem;
      color: #666;
    }

    .feature svg {
      color: #00bcd4;
    }

    .product-description {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .product-description h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
      color: #333;
    }

    .product-description p {
      line-height: 1.6;
      color: #666;
      margin-bottom: 1.5rem;
    }

    .specifications h3 {
      margin: 0 0 1rem 0;
      font-size: 1.2rem;
      color: #333;
    }

    .specifications ul {
      list-style: none;
      padding: 0;
    }

    .specifications li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
      color: #666;
    }

    .specifications li:last-child {
      border-bottom: none;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 50vh;
      gap: 1rem;
    }

    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #00bcd4;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
      .product-details-container {
        padding: 1rem;
      }

      .product-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 1.5rem;
      }

      .product-title {
        font-size: 1.5rem;
      }

      .action-buttons {
        flex-direction: column;
      }

      .thumbnail-images {
        justify-content: center;
      }
    }
  `]
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  selectedSize: string = 'M';
  selectedColor: string = 'Black';
  quantity: number = 1;
  
  sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  colors = [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#ffffff' },
    { name: 'Navy', value: '#1a237e' },
    { name: 'Gray', value: '#757575' }
  ];

  // Sample products data
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

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === productId);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    console.log('Added to cart:', {
      product: this.product,
      size: this.selectedSize,
      color: this.selectedColor,
      quantity: this.quantity
    });
    alert(`Added ${this.quantity} ${this.product?.name} (${this.selectedSize}, ${this.selectedColor}) to cart!`);
  }

  buyNow() {
    console.log('Buy now:', {
      product: this.product,
      size: this.selectedSize,
      color: this.selectedColor,
      quantity: this.quantity
    });
    alert(`Proceeding to checkout with ${this.quantity} ${this.product?.name} (${this.selectedSize}, ${this.selectedColor})`);
  }

  addToWishlist() {
    console.log('Added to wishlist:', this.product);
    alert(`Added ${this.product?.name} to wishlist!`);
  }
}