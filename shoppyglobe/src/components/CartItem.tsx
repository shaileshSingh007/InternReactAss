import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem as CartItemType, incrementQuantity, decrementQuantity } from '../redux/cartSlice';

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  const dispatch = useDispatch();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      background: '#fafafa',
      borderRadius: 8,
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      padding: 16,
      gap: 16,
    }}>
      <img src={item.thumbnail} alt={item.title} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 17, marginBottom: 4 }}>{item.title}</h3>
        <p style={{ color: '#888', fontSize: 14, marginBottom: 8 }}>${item.price}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={() => dispatch(decrementQuantity(item.id))}
            disabled={item.quantity <= 1}
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: '1px solid #ccc',
              background: '#fff',
              color: '#333',
              fontWeight: 'bold',
              cursor: item.quantity > 1 ? 'pointer' : 'not-allowed',
            }}
          >
            -
          </button>
          <span style={{ minWidth: 24, textAlign: 'center', fontWeight: 'bold' }}>{item.quantity}</span>
          <button
            onClick={() => dispatch(incrementQuantity(item.id))}
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: '1px solid #ccc',
              background: '#fff',
              color: '#333',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={onRemove}
        style={{
          background: '#ff5252',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '8px 12px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginLeft: 8,
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem; 