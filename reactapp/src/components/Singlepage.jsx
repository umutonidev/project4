import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./Shop";
import "../styles/single.css";

function Singlepage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <h2 className="error-message">Product not found!</h2>;
  }

  return (
    <div className="single-product-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back to Shop</button>

      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-detail-image" />
        
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-category"><strong>Category:</strong> {product.category}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-price"><strong>Price:</strong> {product.priceRange}</p>
          <p className="product-stock"><strong>Stock Status:</strong> {product.stock}</p>
          
          <div className="product-rating">
            <strong>Rating: </strong>
            {[...Array(product.rating)].map((_, i) => <span key={i}>⭐</span>)}
          </div>

          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Singlepage;
