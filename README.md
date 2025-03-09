# E-Commerce

🚀 e-commerce using React.js, Node.js, Stripe, and Redis.

## 📌 Features
- 🗄️ **MongoDB & Redis Integration** for efficient data handling
- 💳 **Stripe Payment Gateway** for secure transactions
- 🔐 **JWT Authentication** with Refresh/Access Tokens
- 📝 **User Signup & Login System**
- 🛒 **Shopping Cart & Checkout** with Stripe
- 📦 **Product & Category Management**
- 💰 **Coupon Code System** for discounts
- 👑 **Admin Dashboard** with product and order management
- 📊 **Sales Analytics & Reports**
- 🎨 **Tailwind CSS** for responsive UI design
- 🚀 **Caching with Redis** for performance optimization
- 🔒 **Security & Data Protection**

## 📂 Project Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/nghiahd147/Fullstack-Ecommerce.git
cd Fullstack-Ecommerce
```

### 2️⃣ Install Dependencies
#### Backend:
```bash
cd backend
npm install
```
#### Frontend:
```bash
cd frontend
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the `backend` directory with the following:
```
MONGO_URI=your_mongodb_connection_string
REDIS_URI=your_redis_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start the Development Server
#### Backend:
```bash
npm run dev
```
#### Frontend:
```bash
npm start
```

### 5️⃣ Access the Application
- **Frontend**: `http://localhost:5173`
- **Backend API**: `http://localhost:5000`

💡 **Need Help?** Feel free to open an issue or contribute to the project!
