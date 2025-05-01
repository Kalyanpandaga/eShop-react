# 🛍️ E-Shop Frontend (React + Tailwind CSS)

A responsive e-commerce frontend built with **React.js**, **React Router**, and **Tailwind CSS**. This project showcases product listings, a mini cart, a detailed cart page, and seamless navigation — inspired by a professional UI reference.

## 🌐 Live Demo

👉 [View Live Demo](https://e-shoping-react.vercel.app/)

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Body.jsx
│   ├── CartPage.jsx
│   ├── FeaturedProducts.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── HomePage.jsx
│   ├── MiniCart.jsx
│   ├── ProductCard.jsx
│   ├── ProductListingPage.jsx
├── context/
│   └── CartContext.js
├── App.js
├── index.js
└── index.css
```

---

## 🚀 Setup Instructions

Follow these steps to run the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Kalyanpandaga/eShop-react.git
   cd eShop-react
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```

4. **Open in Browser**
   Go to [http://localhost:3000](http://localhost:3000)

---

## 🧐 Approach Explanation

- **React + React Router**: Used for building dynamic routing and page rendering.
- **Tailwind CSS**: Enables rapid styling with a utility-first approach.
- **React Context API**: Manages global cart state across components.
- **Mini Cart & Full Cart**: Users can add items, view a quick cart summary, or manage full cart details.
- **API Integration**: Product data is fetched from [FakeStoreAPI](https://fakestoreapi.com/).

### Component Composition

- `Header` includes navigation and cart icon.
- `MiniCart` appears on icon click with product summary.
- `Body` wraps around `Header`, `Footer`, and `Outlet` for routed content.
- `ProductCard` is reusable across Featured and Listing pages.
- `CartPage` allows item quantity updates and removals.

---

## ✅ Assumptions

- The **"Checkout"** button is currently disabled as actual payment logic is out of scope.
- The mini cart is displayed by default (toggle logic can be added later).
- API errors are handled with basic messaging (no retry or fallback logic).
- No authentication or user login system is included.
- Shipping Cost: A hardcoded shipping cost of $10 is used in the cart summary, as no dynamic shipping calculation was specified.

---

## 🌍 Technologies Used

- React.js
- React Router DOM
- Tailwind CSS
- FakeStore API
- Context API

---
