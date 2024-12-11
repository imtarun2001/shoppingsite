import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import './Product.css';
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

export default function Product({product}) {

    let {cartProducts,addToCartHandler,wishListProducts,addToWishListHandler,dark} = useContext(AppContext);

  return (
    <div className='product' id={dark ? 'lightproduct' : 'darkproduct'}>
        <div className='productname'>
            {
                product.title.length > 60 ? `${product.title.slice(0,50)}...` : product.title
            }
        </div>
        <div className='productprice'>
            {
                `💲${product.price}`
            }
        </div>
        <div className='productimageholder'>
            <img src={product.image} alt=""/>
        </div>
        <div className='productdescription'>
            {
                `${product.description.substr(0,70)}...`
            }
        </div>
        <div className='productrating'>
            {
                `${product.rating.rate}🌟 out of 5`
            }
        </div>
        <div className='productstock'>
            only <span>{product.rating.count}</span> units left in stocks
        </div>
        <div className='cartnwishlistbtnholder'>
            <button onClick={() => addToCartHandler(product)}>
                {
                    cartProducts.find(p=>p.id===product.id) ? <MdOutlineRemoveShoppingCart/> : <MdAddShoppingCart/>
                }
            </button>
            <button onClick={() => addToWishListHandler(product)}>
                {
                    wishListProducts.find(p=>p.id===product.id) ? '❤️' : '🤍'
                }
            </button>
        </div>
    </div>
  )
}
