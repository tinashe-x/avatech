import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/productService';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import '../styles/ProductDetails.css'; // Ensure this path is correct
import { useCart } from '../contexts/CartContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <Preloader />;
  }

  if (!product) {
    return (
      <div>
        <NavBar />
        <div className="no-product">Product not found</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="product-container">
        <div className="product-text">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <h3 className="product-includes-title">Includes:</h3>
          <ul className="product-includes">
            {product.includes.map((item, index) => (
              <li key={index} className="include-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>Back to Products</button>
      <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
      <Footer />
    </div>
  );
};

export default ProductDetails;
