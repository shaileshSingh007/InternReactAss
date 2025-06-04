import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart } from '../redux/cartSlice';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: 600, margin: '32px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 24 }}>
      <h2 style={{ marginBottom: 24, textAlign: 'center' }}>Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>Your cart is empty</p>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} onRemove={() => dispatch(removeFromCart(item.id))} />
            ))}
          </div>
          <h3 style={{ marginTop: 32, textAlign: 'right' }}>Total: <span style={{ color: '#ff9800' }}>${total.toFixed(2)}</span></h3>
          <div style={{ marginTop: 32, borderTop: '1px solid #e0e0e0', paddingTop: 24 }}>
            <h3 style={{ marginBottom: 16 }}>Payment</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input type="text" placeholder="Card Number" style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
              <input type="text" placeholder="Expiry Date" style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
              <input type="text" placeholder="CVV" style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
              <button
                style={{
                  background: '#4CAF50',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '12px 24px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.background = '#45a049')}
                onMouseOut={e => (e.currentTarget.style.background = '#4CAF50')}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; 