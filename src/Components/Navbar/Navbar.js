import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import './Navbar.scss';
import ShoppingCart from '../../Assets/Icons/shopping-cart.svg';
import CartMenu from '../CartMenu/CartMenu';
import Profile from '../../Assets/images/profile.png'
function Navbar() {
  const {cart} = useSelector(state => state.CartReducer);
  const [showCart , setShowCart] = useState(false);
  useEffect(() => {
    window.addEventListener('click' , () => setShowCart(false))
    return window.removeEventListener('click' , () => setShowCart(false))
  },[]);
  
  const HandleCartMenu = (e) => {
    e.stopPropagation()
    setShowCart(!showCart)
  }
  return (
    <div className="Navbar">
      {showCart&&<CartMenu />}
      <div className="container">
        <div className="Navbar_content ">
          <Link to='/'><h2 className="font-bold text-[22px]">ShopApp</h2></Link>
          <div className="Navbar_content_Links flex">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
            </ul>
            <div className="Navbar_content_cart" onClick={HandleCartMenu}>
              <img src={ShoppingCart} alt="shoppingCart" />
              <span className="Navbar_content_cart_count">{cart.length}</span>
            </div>
            <img src={Profile} alt="profile" width="40px" className="ml-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
