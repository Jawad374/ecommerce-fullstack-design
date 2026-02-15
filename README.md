# 🌐 NextGen eCommerce Platform

![Project Banner](https://res.cloudinary.com/doeykzpxv/image/upload/v1770474452/ecommerce-products/lszqeajxrweskvzq7szh.png)

![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

> **A professional, scalable, and fully responsive eCommerce solution built for the modern web.**  
> Featuring a separate tailored mobile experience, comprehensive admin dashboard, and robust inventory management.

[**🚀 Live Verification Demo**](https://ecommerce-fullstack-design-chi.vercel.app/) · [**🐛 Report Bug**](https://github.com/jawad374/ecommerce-fullstack-design/issues) · [**✨ Request Feature**](https://github.com/jawad374/ecommerce-fullstack-design/issues)

---

## 📖 Overview

This project represents a full-stack e-commerce application engineered with **Next.js 15 (App Router)**. It bridges the gap between complex functionality and user-friendly design, offering distinct interfaces for desktop and mobile users to ensure optimal conversion rates.

Unlike standard templates, this platform includes a **fully custom Admin Dashboard** with professional-grade product management tools, real-time inventory tracking, and sales analytics basics.

---

## 🌟 Key Features

### 🛍️ Consumer Front-End
*   **Adaptive Responsive Design**: Desktop view for detailed browsing; dedicated Mobile view for app-like interaction.
*   **Smart Search & Filtering**: Real-time search with instant results and deep filtering (Price, Brand, Specs).
*   **Dynamic Cart System**: Persistent cart state with "Saved object for later" and stock validation.
*   **Optimized Performance**: Server-Side Rendering (SSR) for SEO and static generation for speed.

### ⚙️ Professional Admin Panel
*   **Advanced Product Management**: 
    *   **Split-View Editing**: Professional layout separating media, pricing, and specs.
    *   **Drag & Drop Uploads**: Multi-image uploader with instant preview and removal.
    *   **Detailed Specifications**: Fields for warranty, material, design, and custom attributes.
    *   **Status Control**: Draft/Publish/Archive workflows.
*   **Inventory Control**: Visual stock indicators and low-stock alerts.
*   **Secure Authentication**: Role-based access control protecting administrative routes.

---

## 🛠️ Technology Stack

| Domain | Technology | Usage |
|:---|:---|:---|
| **Core** | **Next.js 15** | App Router, Server Actions, API Routes |
| **Language** | **JavaScript** (ES6+) | Modern syntax, async/await patterns |
| **Styling** | **Tailwind CSS** | Utility-first responsive design, Animations |
| **Database** | **MongoDB Atlas** | Document storage, Complex querying |
| **ORM** | **Mongoose** | Schema validation, Data modeling |
| **Storage** | **Cloudinary** | Image hosting, Optimization, Transformations |
| **Icons** | **Lucide React** | Consistent, lightweight SVG iconography |

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18.17 or later)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
*   A MongoDB Connection string (Local or Atlas)
*   A Cloudinary Account (for image uploads)

### Installation Steps

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/jawad374/ecommerce-fullstack-design.git
    cd ecommerce-fullstack-design
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Configuration**
    Create a `.env.local` file in the root directory and add the following keys:
    ```env
    # Database
    MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/ecommerce

    # Authentication (NextAuth / Custom)
    JWT_SECRET=your_super_secret_jwt_key

    # Image Storage (Cloudinary)
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret

    # App Config
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```

4.  **Launch Development Server**
    ```bash
    npm run dev
    ```
    Access the application at `http://localhost:3000`.

---

## 📂 Architecture Overview

The project follows a modular, feature-based architecture pattern.

```text
/
├── app/                    # Next.js App Router (Routes & Pages)
│   ├── admin/              # Admin Dashboard Routes
│   │   ├── products/       # Product CRUD (List, Add, Edit)
│   │   └── users/          # User Management
│   ├── api/                # Serverless API Endpoints
│   ├── cart/               # Shopping Cart Page
│   └── ...
├── components/             # React Components
│   ├── common/             # Shared UI (Modals, Buttons)
│   ├── layout/             # Header, Footer, Sidebar
│   └── product-detail/     # Product Page Specifics
├── context/                # Global State (UserContext, CartContext)
├── lib/                    # Utilities (DB Connect, Helpers)
├── models/                 # Mongoose Database Models
└── public/                 # Static Assets (Images, Icons)
```

---

## � Application Routes & API

### 🖥️ Client Pages

| Route | Description | Access |
|:---|:---|:---|
| `/` | Landing page with featured items | Public |
| `/products` | Full catalog to filter & sort | Public |
| `/product/[id]` | Detailed product view | Public |
| `/cart` | Shopping cart & checkout flow | Public |
| `/login` | Authentication (Login/Register) | Public |
| `/admin` | Dashboard overview | **Admin** |
| `/admin/products` | Inventory list | **Admin** |
| `/admin/products/add` | Create new product | **Admin** |
| `/admin/products/edit/[id]` | Update product details | **Admin** |
| `/admin/users` | Manage customer accounts | **Admin** |

### 🔌 API Endpoints

#### 📦 Products
| Method | Endpoint | Description | Details |
|:---|:---|:---|:---|
| `GET` | `/api/products` | List/Filter products | Query params: `category`, `search` |
| `POST` | `/api/products` | Create product | Requires FormData (files + fields) |
| `GET` | `/api/products/:id` | Get single product | Returns full object |
| `PUT` | `/api/products/:id` | Update product | Supports partial updates |
| `DELETE` | `/api/products/:id` | Remove product | Soft or hard delete |

#### 🔐 Authentication
| Method | Endpoint | Description |
|:---|:---|:---|
| `POST` | `/api/auth/signup` | Register new user |
| `POST` | `/api/auth/login` | Login session |
| `POST` | `/api/auth/logout` | Destroy session |
| `GET` | `/api/auth/me` | Validate session |

#### 👥 Users
| Method | Endpoint | Description |
|:---|:---|:---|
| `GET` | `/api/users` | List all registered users (Admin only) |

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Maintained by <b>Muhammad Jawad Anjum</b></p>
  <p>
    <a href="https://github.com/jawad374">GitHub</a> • 
    <a href="mailto:contact@example.com">Contact</a>
  </p>
</div>
