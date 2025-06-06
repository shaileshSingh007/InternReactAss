# ShoppyGlobe Backend

## Setup Instructions

1. **Install MongoDB**
   - Download and install MongoDB Community Server from: https://www.mongodb.com/try/download/community
   - During installation, choose "Complete" setup
   - Make sure to check "Install MongoDB as a Service"

2. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shoppyglobe/backend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Environment Setup**
   - Copy `example.env` to `.env`
   - The default MongoDB URI is already set for local database

5. **Start MongoDB**
   - MongoDB should be running as a service
   - If not, start it from Services (services.msc) or run `mongod` in terminal

6. **Start the server**
   ```bash
   node server.js
   ```

## API Testing

You can test the APIs using any of these methods:

### Option 1: Using cURL (No Installation Required)
```bash
# Get all products
curl http://localhost:5000/api/products

# Register user
curl -X POST http://localhost:5000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"test@example.com","password":"password123"}'

# Add to cart (replace YOUR_TOKEN_HERE and PRODUCT_ID_HERE)
curl -X POST http://localhost:5000/api/cart \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_TOKEN_HERE" \
-d '{"productId":"PRODUCT_ID_HERE","quantity":1}'
```

### Option 2: Using Thunder Client (VS Code Extension)
1. Install Thunder Client in VS Code
2. Import the provided `thunder-collection_shoppyglobe.json`
3. Use the pre-configured requests

### Option 3: Using Postman
1. Download and install Postman
2. Create new requests using the endpoints below

## API Endpoints

1. **Products**
   - GET `/api/products` - Get all products
   - GET `/api/products/:id` - Get product by ID

2. **Authentication**
   - POST `/api/auth/register` - Register new user
   - POST `/api/auth/login` - Login user

3. **Cart**
   - POST `/api/cart` - Add to cart
   - PUT `/api/cart/:productId` - Update cart
   - DELETE `/api/cart/:productId` - Remove from cart

## Database

This project uses local MongoDB. Make sure MongoDB is installed and running on your machine.

## Testing Data

Sample products are automatically added to the database when the server starts. 