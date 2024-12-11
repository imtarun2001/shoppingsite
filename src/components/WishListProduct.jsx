import React, { useContext } from 'react'
import './WishListProduct.css';
import { MdDeleteSweep } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";
import { AppContext } from '../context/AppContext';

export default function WishListProduct({product}) {

  let {addToCartHandler,removeFromWishListHandler} = useContext(AppContext);

  return (
    <div className='wishlistproduct'>
      <img src={product.image} alt="product image here" height="150px"/>
      <div className='productdetails'>
        <div className='pname'>{product.name}</div>
        <div className='pprice'>💲{product.price}</div>
        <div className='prating'>{product.rating.rate}🌟</div>
        <div className='pstock'>{product.rating.count} units left in stock</div>
        <div className='btnholder'>
            <button className='btn' onClick={() => removeFromWishListHandler(product)}><MdDeleteSweep/></button>
            <button className='btn' onClick={() => addToCartHandler(product)}>Move to Cart <IoMdArrowRoundForward/></button>
        </div>
      </div>
    </div>
  )
}
