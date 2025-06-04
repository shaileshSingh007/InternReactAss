import React, { useState } from 'react';
import useProducts, { Product } from '../hooks/useProducts';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product: Product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ margin: '16px 0', padding: '8px', width: '100%', maxWidth: 400 }}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginTop: '16px',
      }}>
        {filteredProducts.length === 0 ? (
          <div>No products found.</div>
        ) : (
          filteredProducts.map((product: Product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList; 