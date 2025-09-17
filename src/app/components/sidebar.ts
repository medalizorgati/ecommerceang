import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="filter-sidebar">
      <div class="filter-header">
        <h3>Filter</h3>
        <button class="advanced-btn">Advanced</button>
      </div>
      
      <div class="filter-section">
        <div class="filter-title" (click)="toggleSection('brand')">
          <span>Brand</span>
          <svg class="chevron" [class.rotated]="openSections.brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </div>
        <div class="filter-content" [class.open]="openSections.brand">
          <div class="search-brand">
            <input type="text" placeholder="Search brand..." class="brand-search">
          </div>
          <div class="brand-list">
            <label *ngFor="let brand of brands" class="brand-item">
              <input type="checkbox" [checked]="brand.checked">
              <span class="checkmark"></span>
              <span class="brand-name">{{ brand.name }}</span>
              <span class="brand-count">{{ brand.count }}</span>
            </label>
          </div>
        </div>
      </div>
      
      <div class="filter-section">
        <div class="filter-title" (click)="toggleSection('price')">
          <span>Price</span>
          <svg class="chevron" [class.rotated]="openSections.price" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </div>
        <div class="filter-content" [class.open]="openSections.price">
          <div class="price-range">
            <div class="price-inputs">
              <span>200 SAR</span>
              <span>300,000 SAR</span>
            </div>
            <div class="slider-container">
              <input type="range" min="200" max="300000" value="29000" class="price-slider">
              <input type="range" min="200" max="300000" value="150000" class="price-slider">
            </div>
          </div>
        </div>
      </div>
      
      <div class="filter-section">
        <div class="filter-title" (click)="toggleSection('size')">
          <span>Size</span>
          <svg class="chevron" [class.rotated]="openSections.size" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </div>
        <div class="filter-content" [class.open]="openSections.size">
          <div class="size-grid">
            <button *ngFor="let size of sizes" class="size-btn" [class.selected]="size.selected">
              {{ size.name }}
            </button>
          </div>
        </div>
      </div>
      
      <div class="filter-section">
        <div class="filter-title" (click)="toggleSection('color')">
          <span>Size</span>
          <svg class="chevron" [class.rotated]="openSections.color" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </div>
        <div class="filter-content" [class.open]="openSections.color">
          <div class="color-grid">
            <button *ngFor="let color of colors" 
                    class="color-btn" 
                    [style.background-color]="color.value"
                    [class.selected]="color.selected">
            </button>
          </div>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    .filter-sidebar {
      width: 280px;
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      height: fit-content;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .filter-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    
    .filter-header h3 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
    }
    
    .advanced-btn {
      background: none;
      border: none;
      color: #00bcd4;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .filter-section {
      margin-bottom: 1.5rem;
      border-bottom: 1px solid #f0f0f0;
      padding-bottom: 1.5rem;
    }
    
    .filter-section:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
    
    .filter-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-weight: 500;
      color: #333;
      margin-bottom: 1rem;
    }
    
    .chevron {
      transition: transform 0.3s ease;
    }
    
    .chevron.rotated {
      transform: rotate(180deg);
    }
    
    .filter-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    
    .filter-content.open {
      max-height: 300px;
    }
    
    .brand-search {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
    
    .brand-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .brand-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      font-size: 0.9rem;
    }
    
    .brand-item input[type="checkbox"] {
      display: none;
    }
    
    .checkmark {
      width: 16px;
      height: 16px;
      border: 2px solid #ddd;
      border-radius: 3px;
      position: relative;
    }
    
    .brand-item input[type="checkbox"]:checked + .checkmark {
      background: #00bcd4;
      border-color: #00bcd4;
    }
    
    .brand-item input[type="checkbox"]:checked + .checkmark::after {
      content: '✓';
      position: absolute;
      top: -2px;
      left: 2px;
      color: white;
      font-size: 12px;
    }
    
    .brand-name {
      flex: 1;
      color: #333;
    }
    
    .brand-count {
      color: #666;
      font-size: 0.8rem;
    }
    
    .price-range {
      padding: 1rem 0;
    }
    
    .price-inputs {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: #666;
    }
    
    .slider-container {
      position: relative;
    }
    
    .price-slider {
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background: #ddd;
      outline: none;
      -webkit-appearance: none;
      margin: 0.5rem 0;
    }
    
    .price-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #00bcd4;
      cursor: pointer;
    }
    
    .size-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }
    
    .size-btn {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: white;
      cursor: pointer;
      font-size: 0.9rem;
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
    
    .color-grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 0.5rem;
    }
    
    .color-btn {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid #ddd;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .color-btn.selected {
      border-color: #333;
      transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
      .filter-sidebar {
        width: 100%;
        margin-bottom: 2rem;
      }
    }
  `]
})
export class FilterSidebarComponent {
  openSections = {
    brand: true,
    price: true,
    size: true,
    color: true
  };
  
  brands = [
    { name: 'Nike', count: 102, checked: true },
    { name: 'Adidas', count: 56, checked: false },
    { name: 'Apple', count: 12, checked: false },
    { name: 'New Balance', count: 18, checked: false },
    { name: 'Puma', count: 34, checked: false },
    { name: 'Uniqlo', count: 8, checked: false }
  ];
  
  sizes = [
    { name: 'XXS', selected: false },
    { name: 'XS', selected: false },
    { name: 'S', selected: true },
    { name: 'M', selected: false },
    { name: 'L', selected: false },
    { name: 'XL', selected: false },
    { name: 'XXL', selected: false }
  ];
  
  colors = [
    { value: '#000000', selected: false },
    { value: '#ff5722', selected: false },
    { value: '#ffeb3b', selected: false },
    { value: '#4caf50', selected: false },
    { value: '#2196f3', selected: true },
    { value: '#9c27b0', selected: false },
    { value: '#ff9800', selected: false },
    { value: '#f44336', selected: false }
  ];
  
  toggleSection(section: string) {
    this.openSections = {
      ...this.openSections,
      [section]: !this.openSections[section as keyof typeof this.openSections]
    };
  }
}

@Component({
  selector: 'app-header',
  standalone: true,
  template: `<header>Header Content</header>`,
})
export class HeaderComponent {}