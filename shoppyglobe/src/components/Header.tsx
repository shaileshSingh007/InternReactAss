import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Header: React.FC = () => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ background: '#282c34', color: 'white', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="logo" style={{ fontSize: 28 }}>🛒</span>
          ShoppyGlobe
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: 18, fontWeight: 'bold' }}>
            Home
          </Link>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
            Cart
            <span style={{ background: '#ff9800', borderRadius: '50%', padding: '2px 8px', fontSize: 14, fontWeight: 'bold' }}>
              {cartCount}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 