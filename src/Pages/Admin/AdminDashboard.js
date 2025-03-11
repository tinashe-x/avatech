// src/Pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../../services/productService';
import '../../styles/Admin/AdminDashboard.css';


const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const addedProduct = await addProduct(newProduct);
      setProducts([...products, addedProduct]);
      setNewProduct({ name: '', price: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleUpdateProduct = async (product) => {
    try {
      const updated = await updateProduct(product);
      setProducts(products.map(p => (p.id === updated.id ? updated : p)));
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter(p => p.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {editingProduct && editingProduct.id === product.id ? (
              <div>
                <input 
                  type="text" 
                  value={editingProduct.name} 
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                />
                <input 
                  type="number" 
                  value={editingProduct.price} 
                  onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                />
                <button onClick={() => handleUpdateProduct(editingProduct)}>Save</button>
                <button onClick={() => setEditingProduct(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                {product.name} - ${product.price}
                <button onClick={() => setEditingProduct(product)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <h2>Add New Product</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={newProduct.name} 
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={newProduct.price} 
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AdminDashboard;
