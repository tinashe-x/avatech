import { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.productId}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          {/* etc. */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
