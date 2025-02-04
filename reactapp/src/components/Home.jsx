// import React from "react";
// import image1 from '../assets/bootle.jpg';
// import image2 from '../assets/alexa.jpg';
// import image3 from '../assets/headset.jpg';
// import image4 from '../assets/body.jpg';
// import image5 from '../assets/electronic.jpg';
// import image6 from '../assets/pc.jpg';
// import image7 from '../assets/watch.jpg';
// import image8 from '../assets/wom.jpg';









// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
// import "../style/home.css"; 



// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="top-section">
//         <div className="sidebar">
//           <ul>
//             <li>Electronics</li>
//             <li>Computer Gadget</li>
//             <li>Fashion</li>
//             <li>Body Lotion</li>
//             <li>Woman Clothes</li>
//             <li>Shoes</li>
//             <li>Watches</li>
//           </ul>
//         </div>
//         <div className="hero">
//           <h2>Explore our latest and greatest electronics</h2>
//           <button className="shop-now">SHOP NOW</button>
//         </div>
       
     

      
//       <section className="categories">
        
//         <div className="category-list">
//         <h2>Popular Categories</h2>
//           <div className="category"><img src={image4} alt="Body Lotion" /><p>Body Lotion</p></div>
//           <div className="category"><img src={image1} alt="Sports" /><p>Sports</p></div>
//           <div className="category"><img src={image6} alt="Computer Gadget" /><p>Computer Gadget</p></div>
//           <div className="category"><img src={image5} alt="Electronics" /><p>Electronics</p></div>
//           <div className="category"><img src={image7} alt="Watch" /><p>Watch</p></div>
//           <div className="category"><img src={image8} alt="Woman Clothes" /><p>Woman Clothes</p></div>
//         </div>
//       </section>
//         </div>

    
//       <section className="new-arrivals">
//         <h3>New Arrival Products</h3>
//         <div className="products-grid">
//           <div className="product">
//             <img src={image1} alt="All In One Bottle"/>
//             <p className="title">All In One Bottle</p>
//             <p className="price">$22.00 - $35.00</p>
//             <div className="stars">
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStarHalfAlt} />
//             </div>
//           </div>

//           <div className="product">
//             <img src={image2} alt="Amazon Alexa" />
//             <p className="title">Amazon Alexa</p>
//             <p className="price">$49.00 - $60.00</p>
//             <div className="stars">
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//             </div>
//           </div>

//           <div className="product">
//             <img src={image3} alt="Headset Gamer Legion" />
//             <p className="title">Headset Gamer Legion</p>
//             <p className="price">$22.00 - $55.00</p>
//             <div className="stars">
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStarHalfAlt} />
//             </div>
//           </div>
//         </div>
//         <button className="shop-now">SHOP NOW</button>
//       </section>

      
//       <section className="vendor-list">
//         <h3>Our Vendor List</h3>
//         <div className="vendors-grid">
//           {["Santa Monica's Store", "Josh Doe’s Store", "Digital Good’s Store", "Jessica’s Store", "The Glass Store", "John Doe’s Store"].map((vendor, index) => (
//             <div className="vendor" key={index}>{vendor}</div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import image1 from '../assets/bootle.jpg';
import image2 from '../assets/alexa.jpg';
import image3 from '../assets/headset.jpg';
import image4 from '../assets/body.jpg';
import image5 from '../assets/electronic.jpg';
import image6 from '../assets/pc.jpg';
import image7 from '../assets/watch.jpg';
import image8 from '../assets/wom.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/style.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-section">
        <div className="sidebar">
          <ul>
            <li>Electronics</li>
            <li>Computer Gadget</li>
            <li>Fashion</li>
            <li>Body Lotion</li>
            <li>Woman Clothes</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>
        <div className="hero">
          <h2>Explore our latest and greatest electronics</h2>
          <button className="shop-now">SHOP NOW</button>
          
          <section className="popular-categories">
            <h2>Popular Categories</h2>
            <div className="categories-grid">
                <div className="category"><img src={image4} alt="Body Lotion" /><p>Body Lotion</p></div>
                <div className="category"><img src={image1} alt="Sports" /><p>Sports</p></div>
                <div className="category"><img src={image6} alt="Computer Gadget" /><p>Computer Gadget</p></div>
                <div className="category"><img src={image5} alt="Electronics" /><p>Electronics</p></div>
                <div className="category"><img src={image7} alt="Watch" /><p>Watch</p></div>
                <div className="category"><img src={image8} alt="Woman Clothes" /><p>Woman Clothes</p></div>
          </div>
          </section>
        </div>
        
      </div>

      <section className="new-arrivals">
        <h3>New Arrival Products</h3>
        <div className="products-grid">
          <div className="product">
            <img src={image1} alt="All In One Bottle"/>
            <p className="title">All In One Bottle</p>
            <p className="price">$22.00 - $35.00</p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </div>

          <div className="product">
            <img src={image2} alt="Amazon Alexa" />
            <p className="title">Amazon Alexa</p>
            <p className="price">$49.00 - $60.00</p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>

          <div className="product">
            <img src={image3} alt="Headset Gamer Legion" />
            <p className="title">Headset Gamer Legion</p>
            <p className="price">$22.00 - $55.00</p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </div>
        </div>
        <button className="shop-now">SHOP NOW</button>
      </section>
      
      <section className="vendor-list">
        <h3>Our Vendor List</h3>
        <div className="vendors-grid">
          {["Santa Monica's Store", "Josh Doe’s Store", "Digital Good’s Store", "Jessica’s Store", "The Glass Store", "John Doe’s Store"].map((vendor, index) => (
            <div className="vendor" key={index}>{vendor}</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;