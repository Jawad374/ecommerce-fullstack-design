# 🛍️ Modern Full-Stack eCommerce Platform

![Project Banner](https://res.cloudinary.com/doeykzpxv/image/upload/v1770474452/ecommerce-products/lszqeajxrweskvzq7szh.png)
> A robust, responsive, and feature-rich eCommerce web application built with **Next.js**, **Node.js**, and **MongoDB**. Designed to provide a seamless shopping experience across all devices.

[**🌐 Live Demo**](https://ecommerce-fullstack-design-chi.vercel.app/)

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🚀 Features

### 🖥️ Desktop Experience
- **Dynamic Home Page**: Feature-rich landing page with deals, recommended items, and supplier sections.
- **Advanced Product Filtering**: Filter by category, price range, brand, and features.
- **Search Functionality**: Real-time product search with category selection.
- **User Accounts**: Secure login/signup system with role-based access.

### 📱 Optimized Mobile Experience
- **App-like Navigation**: Dedicated mobile interface with bottom navigation/headers.
- **Touch-Friendly Filters**: Full-screen modal for sorting and filtering products.
- **Mobile Gallery**: Swipeable image gallery with counters for product details.
- **Responsive Cart**: Optimized checkout flow and "You May Also Like" recommendations.

### 🛡️ Admin Dashboard
- **Product Management**: Create, Read, Update, and Delete (CRUD) products.
- **Inventory Control**: Manage stock levels, pricing, and product attributes.
- **Secure Access**: Protected routes ensuring only admins can access sensitive tools.

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Next.js (App Router), React, Tailwind CSS |
| **Backend** | Next.js API Routes (Serverless Functions) |
| **Database** | MongoDB, Mongoose ODM |
| **State Management** | React Context API (Cart & User Contexts) |
| **Icons** | Lucide React |

---


## ⚡ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB connection string (Atlas or Local)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce-fullstack-design.git
   cd ecommerce-fullstack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

```
├── app/                  # Next.js App Router Pages & API
│   ├── admin/            # Admin Dashboard
│   ├── api/              # Backend API Endpoints
│   ├── product/          # Product Details Page
│   └── ...
├── components/           # Reusable React Components
│   ├── home/             # Landing Page Sections
│   ├── layout/           # Header, Footer
│   ├── product-detail/   # Product Specific Components
│   └── ...
├── context/              # Global State (Cart, User)
├── lib/                  # Database Connection Utilities
├── models/               # Mongoose Schemas (User, Product)
└── public/               # Static Assets
```

---

## 👥 Contributors

- **Muhammad Jawad Anjum** - [Jawad374](https://github.com/jawad374)

---

<center> Made with ❤️ by Muhammad Jawad Anjum </center>
