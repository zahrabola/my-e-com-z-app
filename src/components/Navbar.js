import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links-nav">
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
