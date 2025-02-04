/*import React from "react";
import{Link} from "react-router-dom"
import{IoCallSharp} from "react-icons/io5";
import "../styles/style.css";

const Navabar=()=>{
    return(
        <div className="nav">
            <div class="topnav">
        <h1 className="logo">Botiga</h1></div>
        <div className="search-container"></div>
            
            <ul>
                <li>
                    Trending categories
                    <ul>
                        <li>Body lotion</li>
                        <li>Electronics</li>
                        <li>Women Clothes</li>
                        <li>Shoes</li>
                        <li>Watch</li>
                    </ul>
                </li>
                <li><a href="/Home">Home</a></li>
               <li> <a href="/Shop">Shop</a></li>
               <li> <a href="/Vendors">Vendors</a></li>
               <li> <a href="/Blog">Blog</a></li>
               <li> <a href="/Contact">Contact</a></li>
                <li><IoCallSharp/>800-123-4567</li>

            </ul>
        </div>


    )
}
export default Navabar*/

import { useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import{IoCallSharp} from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

import "../styles/navbar.css";

const Navbar = () => {
  const [allCategories, setAllCategories] = useState("All Categories");
  const [trendingCategory, setTrendingCategory] = useState("Trending Categories");

  return (
    <div>
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="logo">Botiga</div>
        <div className="left-top">
          <select 
            className="category-dropdown" 
            value={allCategories} 
            onChange={(e) => setAllCategories(e.target.value)}
          >
            <option>All Categories</option>
            <option>uncategorized</option>
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
           <Link to='/Loginform'>  <span className="icon"><IoPersonSharp/></span></Link>
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
            <option>Women clothes</option>
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
        <span 
        className="phone-number"><IoCallSharp/>800-123-4567</span>
      </nav>
    </div>
  );
};

export default Navbar;
// import { useState } from "react";
// import { IoHeartSharp } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
// import { IoPersonSharp } from "react-icons/io5";
// import { IoCallSharp } from "react-icons/io5";
// import { IoSearchSharp } from "react-icons/io5";

// import "../styles/navbar.css";

// const Navbar = () => {
//   const [allCategories, setAllCategories] = useState("All Categories");
//   const [trendingCategory, setTrendingCategory] = useState("Trending Categories");

//   return (
//     <div>
//       {/* Top Navbar */}
//       <div className="top-navbar">
//         <div className="logo">Botiga</div>
//         <div className="left-top">
//           <select
//             className="category-dropdown"
//             value={allCategories}
//             onChange={(e) => setAllCategories(e.target.value)}
//           >
//             <option>All Categories</option>
//             <option>uncategorized</option>
//             <option>Body lotion</option>
//             <option>Electronics</option>
//             <option>Fashion</option>
//             <option>Home & Kitchen</option>
//             <option>Sports</option>
//           </select>

//           <div className="search-container">
//             <input type="text" placeholder="Search products..." className="search-input" />
//             <button className="search-button"><IoSearchSharp /></button>
//           </div>
//         </div>
//         <div className="right-top">
//           <div className="icons">
//             <span className="icon"><IoPersonSharp /></span>
//             <span className="icon"><MdOutlineEmail /><sup>0</sup></span>
//             <span className="icon"><IoHeartSharp /><sup>0</sup></span>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="main-navbar">
//         <div className="nav-links">
//           <select
//             className="category-dropdown"
//             value={trendingCategory}
//             onChange={(e) => setTrendingCategory(e.target.value)}
//           >
//             <option>Trending Categories</option>
//             <option>Body Lotion</option>
//             <option>Electronics</option>
//             <option>Women clothes</option>
//             <option>Shoes</option>
//           </select>
//           <ul className="link">
//             <li><a href="/Home" className="nav-link">Home</a></li>
//             <li><a href="/Shop" className="nav-link">Shop</a></li>
//             <li><a href="/Vendors" className="nav-link">Vendors</a></li>
//             <li><a href="/Blog" className="nav-link">Blog</a></li>
//             <li><a href="/Contact" className="nav-link">Contact</a></li>
//           </ul>
//         </div>
//         <span
//           className="phone-number"><IoCallSharp />800-123-4567</span>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;