// import React from "react";
// import "../styles/style.css";
// import bottle from"../assets/bootle.jpg";
// import alexa from"../assets/watch.jpg";
// import head from"../assets/head.jpg";


// const products = [
//   { id: 1, name: "All In One Bottle", price: "$22.00 - $55.00", image: bottle},
//   { id: 2, name: "Amazon Alexa", price: "$49.00 - $69.00", image: alexa },
//   { id: 3, name: "Headset Gamer Legion", price: "$22.00 - $88.00", image: head },
// ];

// const categories = [
//   "Body Lotion (1)",
//   "Computer Gadget (3)",
//   "Electronics (5)",
//   "Fashion (3)",
//   "General (1)",
//   "Shoes (2)",
//   "Sports (3)",
//   "Watch (1)",
//   "Woman Clothes (3)",
// ];

// const Shop = () => {
//   return (
//     <div className="shop">
//       <h1>Shop</h1>
//       <div className="shop-container">
//         <div className="categories">
//           <h3>Categories</h3>
//           <ul>
//             {categories.map((category, index) => (
//               <li key={index}>{category}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="products">
//           <p>Showing 1–9 of 13 results</p>
//           <div className="product-list">
//             {products.map((product) => (
//               <div className="product-card" key={product.id}>
//                 <img src={product.image} alt="bottle" />
//                 <h4>{product.name}</h4>
//                 <p>{product.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;
import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import image1 from '../assets/pic1.jpg';
import image2 from '../assets/pic2.jpg';
import image3 from '../assets/pic3.jpg';
import image4 from '../assets/pic4.jpg';
import image5 from '../assets/pic5.jpg';
import image6 from '../assets/pic6.jpg';
import image7 from '../assets/pic7.jpg';
import image8 from '../assets/pic8.jpg';
import image9 from '../assets/pic9.jpg';
import image10 from '../assets/topheader.jpg'; // Ensure this image exists
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

const products = [
  { id: 1, name: 'All In One Bottle', priceRange: '$22.00 – $55.00', rating: 3, image: image1 },
  { id: 2, name: 'Amazon Alexa', priceRange: '$49.00 – $69.00', rating: 5, image: image2 },
  { id: 3, name: 'Headset Gamer Legion', priceRange: '$22.00 – $55.00', rating: 4, image: image3 },
  { id: 4, name: 'Headset Gamer Legion Plus', priceRange: '$22.00 – $55.00', rating: 5, image: image4 },
  { id: 5, name: 'JDoe’s Styling Watch', priceRange: '$22.00 – $33.00', rating: 5, image: image5 },
  { id: 6, name: 'Jessi Cam Recorder', priceRange: '$22.00 – $55.00', rating: 5, image: image6 },
  { id: 7, name: 'John Sport Shoes', priceRange: '$22.00 – $55.00', rating: 5, image: image7 },
  { id: 8, name: 'Mouse Raxer 3000DPI', priceRange: '$22.00 – $55.00', rating: 4, image: image8 },
  { id: 9, name: 'Santa Monica Facial Cream', priceRange: '$22.00 – $55.00', rating: 5, image: image9 },
];

function Shop() {
  return (
    <div className="shop-container">
      {/* Shop Header with Background Image */}
      <div className="shop-header">
        <img src={image10} alt="Shop Banner" className="shop-top-image" />
        <h1>Shop</h1>
      </div>

      {/* Sidebar + Products Layout */}
      <div className="shop-content">
        <aside className="shop-sidebar">
          <h2>Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.priceRange}</p>
              <div className="product-rating">
                {[...Array(product.rating)].map((_, i) => <IoStarSharp key={i} />)}
              </div>
              <button className="product-button">Select options</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;