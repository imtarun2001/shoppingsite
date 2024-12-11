import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import WishListProduct from '../components/WishListProduct';
import './WishListPage.css';

export default function WishListPage() {

  let {wishListProducts,wishListTotalPrice,gotoCart} = useContext(AppContext);



  return (
    <div className='wishlistpage'>

      <div className='mywishlist'>My Wishlist💗✨</div>

      <div>
        <div className='wishlistproducts'>
          {
            wishListProducts.map((product) => {
              return <WishListProduct key={product.id} product={product}></WishListProduct>
            })
          }
        </div>
        <div className='checkoutbtnholder'>
            <div className='totalitems'>Total items : {wishListProducts.length}</div>
            <div className='totalamount'>Total Amount : 💲{wishListTotalPrice}</div>
            <button onClick={gotoCart}>Go to cart</button>
        </div>
      </div>

    </div>
  )
}
