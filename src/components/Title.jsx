import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import './Title.css';
import { FiLogIn } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

export default function Title() {

  let {cartProducts,wishListProducts,gotoCart,gotoWishList,isLoggedIn,gotoDashboard,gotoDashboardNLogOut,gotoLogIn,gotoSignUp} = useContext(AppContext);

  return (
    <div className='title'>
      <button className='cartbtn' onClick={gotoCart}>Cart <BsCart4/><div className='sup'>{cartProducts.length}</div></button>
      <button className='cartbtn' onClick={gotoWishList}>Wishlist <MdFavorite/><div className='sup'>{wishListProducts.length}</div></button>
      <div className='flipzon' onClick={gotoDashboard}>FlipZon</div>
      {
        isLoggedIn ? <button onClick={gotoDashboardNLogOut}>LogOut<FiLogIn/></button> : <button onClick={gotoLogIn}>LogIn<FiLogIn/></button>
      }
      <button onClick={gotoSignUp}>SignUp<FaUserPlus/></button>
    </div>
  )
}
