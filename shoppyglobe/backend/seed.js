const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: "Smartphone X",
    price: 699.99,
    description: "Latest smartphone with advanced features",
    stockQuantity: 50,
    image: "https://example.com/smartphone.jpg"
  },
  {
    name: "Laptop Pro",
    price: 1299.99,
    description: "High-performance laptop for professionals",
    stockQuantity: 30,
    image: "https://example.com/laptop.jpg"
  },
  {
    name: "Wireless Earbuds",
    price: 149.99,
    description: "Premium wireless earbuds with noise cancellation",
    stockQuantity: 100,
    image: "https://example.com/earbuds.jpg"
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shoppyglobe');
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products added successfully');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 