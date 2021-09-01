import './styles/header.css'
import Logo from "./Logo";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";

export default function Header(props) {
  const cart = useSelector((state) => state.cart.cart)
  return (
    <div className="header-ctn">
      <div className="inner">
        <Logo />
        <div className="search-input">
          <svg viewBox="0 0 24 24" id="search">
            <path d="M20.773 18.51l-4.322-4.464c-.31-.32-.697-.449-.865-.285-.168.163-.556.035-.866-.286l-.061-.064A6.488 6.488 0 0 0 4.9 4.901a6.491 6.491 0 0 0 8.641 9.661l.027.029c.31.32.425.711.256.874-.168.163-.054.555.256.875l4.32 4.466c.31.32.82.33 1.141.02l1.213-1.174c.32-.31.328-.82.018-1.141zm-8.117-5.855a4.48 4.48 0 0 1-6.328 0 4.48 4.48 0 0 1 0-6.328 4.479 4.479 0 0 1 6.327 0 4.48 4.48 0 0 1 0 6.328z"/>
          </svg>
          <input placeholder="Search products, brands and categories" type="text"/>
        </div>
        <Link to="/cart" className="cart-btn">
          <svg viewBox="0 0 24 24" id="shopping-cart">
            <path fill="none" d="M0 0h24v24H0V0z"/>
            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          <span className="text">
            Cart ({cart.length})
          </span>
        </Link>
      </div>
    </div>
  )
}