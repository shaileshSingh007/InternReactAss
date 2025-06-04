import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  // Add other fields as needed
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (err: any) {
        setError('Failed to fetch products');
    } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts; 