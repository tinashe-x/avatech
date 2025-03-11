// src/Pages/AllProductDetails.js
import React, { useState, useEffect } from 'react';
import ProductComponent from '../components/Product';
import { getProducts } from '../services/productService';
import '../styles/Product.css';
import NavBar from '../components/NavBar';  
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

const AllProductDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
      const timeout = setTimeout(() => {
          setIsLoading(false);
      }, 5000);

      return () => clearTimeout(timeout);
  }, []);


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


  if (!products.length && !isLoading) {
    return <div>No products available</div>;
  }

  return (
    <div>
      {isLoading ? <Preloader /> : null}
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
          showLink={true}
        />
      ))}
    </div>
    <Footer />
  </div>
  );
};

export default AllProductDetails;
