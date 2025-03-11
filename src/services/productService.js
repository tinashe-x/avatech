// src/services/productService.js
export const getProducts = async () => {
    const response = await fetch('http://localhost:5000/api/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  };
  
  export const addProduct = async (product) => {
    const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
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
  