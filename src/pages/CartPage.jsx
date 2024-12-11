import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import CartProduct from '../components/CartProduct';
import { IoMdLock } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export default function CartPage() {

  let {cartProducts,price} = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='wishlistpage'>

    <div className='mywishlist'>My Cart &nbsp; <BsCart4/>✨</div>

    <div>
      <div className='wishlistproducts'>
        {
          cartProducts.map((product) => {
            return <CartProduct key={product.id} product={product}></CartProduct>
          })
        }
      </div>
      <div className='checkoutbtnholder'>
          <div className='totalitems'>Total <span>{cartProducts.length}</span> items</div>
          <div className='totalamount'>Total Amount : <span>{price.toFixed(2)}</span>💲</div>
          <button onClick={() => navigate('/checkout')}><IoMdLock/>&nbsp;&nbsp;&nbsp;&nbsp;Check out</button>
      </div>
    </div>

  </div>
  )
}
