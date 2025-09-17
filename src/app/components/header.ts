import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="header-container">
        <div class="header-left">
          <div class="logo">
            <span class="logo-text">stella</span>
          </div>
        </div>
        
        <div class="header-center">
          <div class="search-container">
            <input type="text" placeholder="What are you looking for?" class="search-input">
            <button class="search-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="header-right">
          <div class="header-actions">
            <button class="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button class="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span class="cart-count">2</span>
            </button>
            <div class="language-selector">
              <span>🇺🇸 English</span>
            </div>
            <div class="user-info">
              <span>AR</span>
              <span>Abdel Rahman</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: white;
      border-bottom: 1px solid #e5e5e5;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
    }
    
    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: #00bcd4;
    }
    
    .search-container {
      position: relative;
      width: 400px;
    }
    
    .search-input {
      width: 100%;
      padding: 0.75rem 3rem 0.75rem 1rem;
      border: 1px solid #ddd;
      border-radius: 25px;
      outline: none;
      font-size: 0.9rem;
    }
    
    .search-input:focus {
      border-color: #00bcd4;
    }
    
    .search-btn {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: #666;
      cursor: pointer;
    }
    
    .header-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .icon-btn {
      background: none;
      border: none;
      cursor: pointer;
      position: relative;
      padding: 0.5rem;
      color: #666;
    }
    
    .cart-count {
      position: absolute;
      top: -5px;
      right: -5px;
      background: #ff5722;
      color: white;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 600;
    }
    
    .language-selector {
      font-size: 0.9rem;
      color: #666;
    }
    
    .user-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
      color: #333;
    }
    
    @media (max-width: 768px) {
      .header-container {
        padding: 1rem;
      }
      
      .search-container {
        width: 250px;
      }
      
      .user-info {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {}