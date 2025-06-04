import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Product } from '../hooks/useProducts';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) return <div style={{ textAlign: 'center', padding: 32 }}>Loading product...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: 32, color: '#ff5252' }}>{error}</div>;
  if (!product) return <div style={{ textAlign: 'center', padding: 32 }}>Product not found</div>;

  return (
    <div style={{ maxWidth: 800, margin: '32px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <img src={product.thumbnail} alt={product.title} style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: 8 }} />
        <h2 style={{ fontSize: 24, marginBottom: 8 }}>{product.title}</h2>
        <p style={{ color: '#666', fontSize: 16, marginBottom: 16, textAlign: 'center' }}>{product.description}</p>
        <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>${product.price}</h3>
        <button
          onClick={handleAddToCart}
          style={{
            background: '#ff9800',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '12px 24px',
            fontWeight: 'bold',
            fontSize: 16,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#fb8c00')}
          onMouseOut={e => (e.currentTarget.style.background = '#ff9800')}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail; 