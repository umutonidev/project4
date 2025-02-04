import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import image1 from'../assets/image1.jpg';
import image2 from'../assets/image2.jpg';
import image3 from'../assets/image3.jpg';
import image4 from'../assets/image4.jpg';
import image5 from'../assets/image5.jpg';
import image6 from'../assets/image6.jpg';
import "../styles/style.css";

const vendors = [
  {
    id: 1,
    name: "John Doe's Store",
    rating: 5,
    location: "Central Park, New York, US",
    image: image1,
  },
  {
    id: 2,
    name: "Jessica's Store",
    rating: 4,
    location: "Central Park, New York, US",
    image: image2,
  },
  {
    id: 3,
    name: "Santa Monica's Store",
    rating: 4.5,
    location: "Central Park, New York, US",
    image: image3,
  },
  {
    id: 4,
    name: "Digital Good's Store",
    rating: 4.2,
    location: "New York, US",
    image: image4,
  },
  {
    id: 5,
    name: "The Glass Store",
    rating: 4.7,
    location: "New York, US",
    image: image5,
  },
  {
    id: 6,
    name: "Josh Doe's Store",
    rating: 4.3,
    location: "New York, US",
    image: image6,
  },
];

const Vendors = () => {
  return (
    <div className="vendors-container">
      <h1>Vendors List</h1>
      <div className="vendors-grid">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="vendor-card">
            <img src={vendor.image} alt={vendor.name} className="vendor-image" />
            <h2>{vendor.name}</h2>
            <p>{vendor.location}</p>
            <div className="rating"><LiaStarSolid /> {vendor.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;