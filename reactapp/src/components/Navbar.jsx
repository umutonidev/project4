import { useState } from "react";
import { IoHeartSharp, IoPersonSharp, IoCallSharp, IoSearchSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import LoginForm from "../components/Loginform"; 
import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [allCategories, setAllCategories] = useState("All Categories");
  const [trendingCategory, setTrendingCategory] = useState("Trending Categories");
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = () => {
    setShowLoginForm(true);
  };

  const closeForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div>
      {showLoginForm && <LoginForm closeform={closeForm} />}
      
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="logo">Botiga</div>
        <Link to='/view'>view</Link>
        <div className="left-top">
          <select 
            className="category-dropdown" 
            value={allCategories} 
            onChange={(e) => setAllCategories(e.target.value)}
          >
            <option>All Categories</option>
            <option>Uncategorized</option>
            <option>Body lotion</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Kitchen</option>
            <option>Sports</option>
          </select>
          
          <div className="search-container">
            <input type="text" placeholder="Search products..." className="search-input" />
            <button className="search-button"><IoSearchSharp/></button>
          </div>
        </div>
        <div className="right-top">
          <div className="icons">
            <span className="icon"><IoPersonSharp onClick={handleLogin}/></span>
            <span className="icon"><MdOutlineEmail/><sup>0</sup></span>
            <span className="icon"><IoHeartSharp/><sup>0</sup></span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="nav-links">
          <select 
            className="category-dropdown" 
            value={trendingCategory} 
            onChange={(e) => setTrendingCategory(e.target.value)}
          >
            <option>Trending Categories</option>
            <option>Body Lotion</option>
            <option>Electronics</option>
            <option>Women Clothes</option>
            <option>Shoes</option>
          </select>
          <ul className="link">
            <li><a href="/Home">Home</a></li>
            <li><a href="/Shop">Shop</a></li>
            <li><a href="/Vendors">Vendors</a></li>
            <li><a href="/Blog">Blog</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
        <span className="phone-number"><IoCallSharp/>800-123-4567</span>
      </nav>
    </div>
  );
};

export default Navbar;
