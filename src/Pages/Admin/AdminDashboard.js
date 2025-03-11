import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../../services/productService';
import '../../styles/Admin/AdminDashboard.css';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    includes: '',
    image: null, // File object
    price: ''
  });
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
      const formData = new FormData();
      formData.append('title', newProduct.title);
      formData.append('description', newProduct.description);
      formData.append('includes', newProduct.includes);
      formData.append('price', newProduct.price);
      if (newProduct.image) {
        formData.append('image', newProduct.image);
      }
  
      // Log the FormData contents
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
  
      const addedProduct = await addProduct(formData);
      setProducts([...products, addedProduct]);
      setNewProduct({
        title: '',
        description: '',
        includes: '',
        image: null,
        price: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  
  const handleUpdateProduct = async (product) => {
    try {
      const formData = new FormData();
      formData.append('title', product.title);
      formData.append('description', product.description);
      formData.append('includes', product.includes);
      formData.append('price', product.price);
      if (product.image) {
        formData.append('image', product.image);
      }

      const updatedProduct = await updateProduct(product.id, formData);
      setProducts(products.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
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
              <div className="edit-product">
                <input
                  type="text"
                  value={editingProduct.title}
                  onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
                  placeholder="Title"
                />
                <input
                  type="text"
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  placeholder="Description"
                />
                <input
                  type="text"
                  value={editingProduct.includes}
                  onChange={(e) => setEditingProduct({ ...editingProduct, includes: e.target.value })}
                  placeholder="Includes (comma separated)"
                />
                <input
                  type="file"
                  onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.files[0] })}
                />
                <input
                  type="number"
                  value={editingProduct.price}
                  onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                  placeholder="Price"
                />
                <button onClick={() => handleUpdateProduct(editingProduct)}>Save</button>
                <button onClick={() => setEditingProduct(null)}>Cancel</button>
              </div>
            ) : (
              <div className="display-product">
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                <p>Includes: {product.includes}</p>
                <p>Price: ${product.price}</p>
                {product.image && (
                  <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
                )}
                <button onClick={() => setEditingProduct(product)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <h2>Add New Product</h2>
      <div className="add-product">
        <input
          id='Title'
          type="text"
          placeholder="Title"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
        />
        <input
        id='Description'
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
        id='Includes'
          type="text"
          placeholder="Includes (comma separated)"
          value={newProduct.includes}
          onChange={(e) => setNewProduct({ ...newProduct, includes: e.target.value })}
        />
        <input
        id='Image'
          type="file"
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })}
        />
        <input
        id='Price'
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
