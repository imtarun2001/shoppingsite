import React, { useContext } from 'react'
import { MdDeleteSweep } from "react-icons/md";
import './WishListProduct.css'
import { AppContext } from '../context/AppContext';

export default function CartProduct({product}) {

  let {removeFromCartHandler,quantity,quantityHandler} = useContext(AppContext);

  return (
    <div className='wishlistproduct'>
      <img src={product.image} alt="product image here" height="150px"/>
      <div className='productdetails'>
        <div className='pname'>{product.title}</div>
        <div className='pprice'>💲{product.price}</div>
        <div className='prating'>{product.rating.rate}🌟</div>
        <div className='pstock'>{product.rating.count} units left in stock</div>
        <div className='quantity'>Quantity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => quantityHandler(quantity-1)} className='quantitychanger'>-</span>&nbsp;&nbsp;&nbsp;<span>{quantity}</span>&nbsp;&nbsp;<span onClick={() => quantityHandler(quantity+1)} className='quantitychanger'>+</span></div>
        <div className='btnholder'>
            <button className='btn' onClick={() => removeFromCartHandler(product)}><MdDeleteSweep/></button>
        </div>
      </div>
    </div>
  )
}
