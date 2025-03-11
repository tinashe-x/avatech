// src/services/productService.js

export const getProducts = async () => {
    const response = await fetch('http://localhost:5000/api/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  };
  
  export const getProductById = async (id) => {
    const response = await fetch(`http://localhost:5000/api/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return await response.json();
  };
  
  export const addProduct = async (product) => {
    // Log the FormData contents for debugging
    for (const [key, value] of product.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      // Do not set the Content-Type header; the browser will set it automatically
      body: product, // Pass FormData directly
    });
  
    if (!response.ok) throw new Error('Failed to add product');
    return await response.json();
  };
  
  
  export const updateProduct = async (product) => {
    const response = await fetch(`http://localhost:5000/api/products/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error('Failed to update product');
    return await response.json();
  };
  
  export const deleteProduct = async (productId) => {
    const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete product');
    return await response.json();
  };
  