import React from 'react';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="logo">EzShopit</div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to EzShopit</h1>
          <p>Your one-stop shop for everything you need!</p>
          <button className="shop-now">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src="/assets/20250509_1843_Barcode_Scan_in_Supermarket_simple_compose_01jttjss7feygatzt844bjhecz-removebg-preview" alt="Shopping" />
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <img src="/assets/fast-delivery.png" alt="Fast Delivery" />
          <h3>Fast Delivery</h3>
        </div>
        <div className="feature">
          <img src="/assets/secure-payment.png" alt="Secure Payment" />
          <h3>Secure Payment</h3>
        </div>
        <div className="feature">
          <img src="/assets/customer-support.png" alt="Customer Support" />
          <h3>24/7 Support</h3>
        </div>
      </section>

      <footer className="homepage-footer">
        <p>&copy; 2025 EzShopit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
