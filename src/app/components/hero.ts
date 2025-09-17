import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Simple<br>is More</h1>
        </div>
        <div class="hero-image">
          <img src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fashion Model">
        </div>
        <button class="scroll-down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 13l3 3 3-3"></path>
            <path d="M7 6l3 3 3-3"></path>
          </svg>
        </button>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
      position: relative;
      height: 500px;
      overflow: hidden;
    }
    
    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      padding: 0 2rem;
    }
    
    .hero-text {
      flex: 1;
      z-index: 2;
    }
    
    .hero-text h1 {
      font-size: 4rem;
      font-weight: 300;
      color: white;
      line-height: 1.1;
      margin: 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    .hero-image {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 60%;
    }
    
    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    
    .scroll-down {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 2;
    }
    
    .scroll-down:hover {
      background: white;
      transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
      .hero {
        height: 400px;
      }
      
      .hero-content {
        padding: 0 1rem;
      }
      
      .hero-text h1 {
        font-size: 2.5rem;
      }
      
      .hero-image {
        width: 70%;
      }
    }
  `]
})
export class HeroComponent {}