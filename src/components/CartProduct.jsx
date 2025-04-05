// import React, { useContext } from 'react'
// import { MdDeleteSweep } from "react-icons/md";
// import './WishListProduct.css'
// import { AppContext } from '../context/AppContext';

// export default function CartProduct({product}) {

//   let {removeFromCartHandler,quantity,quantityHandler} = useContext(AppContext);

//   return (
//     <div className='wishlistproduct'>
//       <img src={product.image} alt="product image here" height="150px"/>
//       <div className='productdetails'>
//         <div className='pname'>{product.title}</div>
//         <div className='pprice'>💲{product.price}</div>
//         <div className='prating'>{product.rating.rate}🌟</div>
//         <div className='pstock'>{product.rating.count} units left in stock</div>
//         <div className='quantity'>Quantity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => quantityHandler(quantity-1)} className='quantitychanger'>-</span>&nbsp;&nbsp;&nbsp;<span>{quantity}</span>&nbsp;&nbsp;<span onClick={() => quantityHandler(quantity+1)} className='quantitychanger'>+</span></div>
//         <div className='btnholder'>
//             <button className='btn' onClick={() => removeFromCartHandler(product)}><MdDeleteSweep/></button>
//         </div>
//       </div>
//     </div>
//   )
// }






import React, { useContext } from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { AppContext } from '../context/AppContext';

export default function CartProduct({ product }) {
  let { removeFromCartHandler, quantity, quantityHandler } = useContext(AppContext);

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700">
      <img
        src={product.image}
        alt="product image here"
        className="w-32 h-32 object-contain rounded"
      />
      <div className="flex-grow space-y-2">
        <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{product.title}</div>
        <div className="text-md text-gray-700 dark:text-gray-300">💲{product.price}</div>
        <div className="text-sm text-yellow-500">{product.rating.rate} <span className="text-gray-500 dark:text-gray-400">🌟</span></div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{product.rating.count} units left</div>
        <div className="flex items-center space-x-4">
          <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Quantity</div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => quantityHandler(quantity - 1)}
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full w-6 h-6 flex items-center justify-center focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              -
            </button>
            <span className="text-gray-800 dark:text-gray-200">{quantity}</span>
            <button
              onClick={() => quantityHandler(quantity + 1)}
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full w-6 h-6 flex items-center justify-center focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="text-red-600 hover:text-red-700 focus:outline-none"
          onClick={() => removeFromCartHandler(product)}
        >
          <MdDeleteSweep size={24} />
        </button>
      </div>
    </div>
  );
}