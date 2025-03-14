// src/services/productService.js

const BASE_URL = 'http://localhost:5000/api/products';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || 'An error occurred while processing the request.');
  }
  return response.json();
};

export const getProducts = async () => {
  const response = await fetch(BASE_URL);
  return handleResponse(response);
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return handleResponse(response);
};

export const addProduct = async (product) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: product, // Assuming 'product' is a FormData object
  });
  return handleResponse(response);
};

export const updateProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/${product.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return handleResponse(response);
};

export const deleteProduct = async (productId) => {
  const response = await fetch(`${BASE_URL}/${productId}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};
