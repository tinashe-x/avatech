// src/pages/AllProducts.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/productService';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import '../styles/AllProducts.css';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  if (!products.length) {
    return (
      <div>
        <NavBar />
        <div className="no-products">No products available</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="all-products-container">
        {products.map((product) => (
            <div key={product.productId} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">
                {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>
                <Link to={`/products/${product.productId}`} className="view-button">
                View Details
                </Link>
            </div>
            </div>
             ))}
        </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
