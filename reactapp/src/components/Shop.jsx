import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/pic1.jpg';
import image2 from '../assets/pic2.jpg';
import image3 from '../assets/pic3.jpg';
import image4 from '../assets/pic4.jpg';
import image5 from '../assets/pic5.jpg';
import image6 from '../assets/pic6.jpg';
import image7 from '../assets/pic7.jpg';
import image8 from '../assets/pic8.jpg';
import image9 from '../assets/pic9.jpg';
import image10 from '../assets/topheader.jpg';
import '../styles/style.css';

const categories = [
  "Body Lotion (1)",
  "Computer Gadget (3)",
  "Electronics (5)",
  "Fashion (3)",
  "General (1)",
  "Shoes (2)",
  "Sports (3)",
  "Watch (1)",
  "Woman Clothes (3)",
];

export const products = [
  { 
    id: 1, 
    name: 'All In One Bottle', 
    priceRange: '$22.00 – $55.00', 
    rating: 3, 
    image: image1,
    description: "A multi-functional bottle suitable for hot and cold beverages.",
    category: "General",
    stock: "Available",
  },
  { 
    id: 2, 
    name: 'Amazon Alexa', 
    priceRange: '$49.00 – $69.00', 
    rating: 5, 
    image: image2,
    description: "A smart home assistant to help with voice commands and automation.",
    category: "Electronics",
    stock: "Limited Stock",
  },
  { 
    id: 3, 
    name: 'Headset Gamer Legion', 
    priceRange: '$22.00 – $55.00', 
    rating: 4, 
    image: image3,
    description: "High-quality gaming headset with noise cancellation.",
    category: "Computer Gadget",
    stock: "Available",
  },
  { 
    id: 4, 
    name: 'Headset Gamer Legion Plus', 
    priceRange: '$22.00 – $55.00', 
    rating: 5, 
    image: image4,
    description: "Upgraded gaming headset with surround sound.",
    category: "Computer Gadget",
    stock: "Available",
  },
  { 
    id: 5, 
    name: 'JDoe’s Styling Watch', 
    priceRange: '$22.00 – $33.00', 
    rating: 5, 
    image: image5,
    description: "A stylish wristwatch for casual and business wear.",
    category: "Watch",
    stock: "Out of Stock",
  },
];

function Shop() {
  const navigate = useNavigate();

  const handleShop = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="shop-container">
      <div className="shop-header">
        <img src={image10} alt="Shop Banner" className="shop-top-image" />
        <h1>Shop</h1>
      </div>

      <div className="shop-content">
        <aside className="shop-sidebar">
          <h2>Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </aside>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.priceRange}</p>
              <div className="product-rating">
                {[...Array(product.rating)].map((_, i) => <IoStarSharp key={i} />)}
              </div>
              <button className="product-button" onClick={() => handleShop(product.id)}>Select options</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
