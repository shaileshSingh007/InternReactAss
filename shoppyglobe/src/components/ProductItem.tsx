import React from 'react';
import { useDispatch } from 'react-redux';
import { Product } from '../hooks/useProducts';
import { addToCart } from '../redux/cartSlice';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert('Product added to cart!');
  };

  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: 12,
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'box-shadow 0.2s',
        cursor: 'pointer',
      }}
      onMouseOver={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)')}
      onMouseOut={e => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)')}
    >
      <img src={product.thumbnail} alt={product.title} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />
      <h3 style={{ fontSize: 18, marginBottom: 8, textAlign: 'center' }}>{product.title}</h3>
      <p style={{ color: '#888', fontSize: 14, marginBottom: 8, textAlign: 'center' }}>{product.description.slice(0, 60)}...</p>
      <p style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 12 }}>${product.price}</p>
      <button
        onClick={handleAddToCart}
        style={{
          background: '#ff9800',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '8px 16px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: 15,
          transition: 'background 0.2s',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#fb8c00')}
        onMouseOut={e => (e.currentTarget.style.background = '#ff9800')}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem; 