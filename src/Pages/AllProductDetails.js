// src/Pages/AllProductDetails.js
import React, { useState, useEffect } from 'react';
import ProductComponent from '../components/Product';
import { getProducts } from '../services/productService';
import '../styles/Product.css';
import NavBar from '../components/NavBar';  
import Footer from '../components/Footer';

const AllProductDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  if (!products.length) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <NavBar />
    <div className="all-products">
      {products.map(product => (
        <ProductComponent
          key={product.id}
          title={product.title}
          description={product.description}
          includes={Array.isArray(product.includes) ? product.includes : product.includes.split(',')}
          image={product.image}
          productId={product.id}
          showLink={false}
        />
      ))}
    </div>
    <Footer />
  </div>
  );
};

export default AllProductDetails;
