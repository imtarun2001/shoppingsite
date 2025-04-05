// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";

// export default function Product({ product }) {
//   const {
//     cartProducts,
//     addToCartHandler,
//     wishListProducts,
//     addToWishListHandler,
//     dark,
//   } = useContext(AppContext);

//   const isInCart = cartProducts.find(p => p.id === product.id);
//   const isInWishlist = wishListProducts.find(p => p.id === product.id);

//   return (
//     <div
//       className={`w-[350px] flex flex-col justify-between items-center my-5 px-2 py-3 gap-1 rounded-xl transition-transform duration-700 transform hover:scale-105 ${
//         dark
//           ? 'outline-2 outline-cyan-400 bg-purple-950 text-aliceblue text-blue-600 hover:outline-blue-700 hover:bg-purple-200 hover:text-black'
//           : 'outline-2 outline-lime-400 bg-aliceblue text-black hover:outline-fuchsia-500 hover:bg-blue-200 hover:text-aliceblue'
//       }`}
//     >
//       {/* Title */}
//       <div className="h-[50px] w-full text-xl font-bold font-[Poppins] flex items-start justify-start">
//         {product.title.length > 60
//           ? `${product.title.slice(0, 50)}...`
//           : product.title}
//       </div>

//       {/* Price */}
//       <div className="h-10 w-[85%] text-right text-[crimson] text-lg font-extrabold font-[Playfair_Display]">
//         💲{product.price}
//       </div>

//       {/* Image */}
//       <div className="h-[200px] flex items-center justify-center">
//         <img src={product.image} alt="product" className="w-[100px]" />
//       </div>

//       {/* Description */}
//       <div className="italic text-justify text-gray-500 text-sm">
//         {`${product.description.substr(0, 70)}...`}
//       </div>

//       {/* Rating */}
//       <div className="font-[Jaro] text-md">
//         {product.rating.rate}🌟 out of 5
//       </div>

//       {/* Stock */}
//       <div className="font-[Roboto] font-medium my-2">
//         only <span className="font-extrabold text-fuchsia-700">{product.rating.count}</span> units left in stock
//       </div>

//       {/* Cart & Wishlist Buttons */}
//       <div className="w-full flex justify-evenly items-center mt-2">
//         <button
//           onClick={() => addToCartHandler(product)}
//           className="text-red-600 font-bold text-xl bg-blue-600 hover:bg-blue-400 px-6 py-2 rounded-2xl transition"
//         >
//           {isInCart ? <MdOutlineRemoveShoppingCart /> : <MdAddShoppingCart />}
//         </button>
//         <button
//           onClick={() => addToWishListHandler(product)}
//           className="text-red-600 font-bold text-xl bg-blue-600 hover:bg-blue-400 px-6 py-2 rounded-2xl transition"
//         >
//           {isInWishlist ? '❤️' : '🤍'}
//         </button>
//       </div>
//     </div>
//   );
// }






import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function Product({ product }) {
  const {
    cartProducts,
    addToCartHandler,
    wishListProducts,
    addToWishListHandler,
    dark,
  } = useContext(AppContext);

  const isInCart = cartProducts.find((p) => p.id === product.id);
  const isInWishlist = wishListProducts.find((p) => p.id === product.id);

  return (
    <div
      className={`group relative flex flex-col items-center justify-between p-6 rounded-lg shadow-md transition-colors duration-300 cursor-pointer ${
        dark
          ? 'bg-gray-800 text-gray-100 hover:bg-gray-700'
          : 'bg-white text-gray-800 hover:bg-gray-100'
      }`}
    >
      {/* Image */}
      <div className="relative w-48 h-48 mb-4 flex items-center justify-center">
        <img
          src={product.image}
          alt="product"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-3">
        <h3 className="text-lg font-semibold line-clamp-2">{product.title}</h3>
      </div>

      {/* Price & Rating */}
      <div className="flex items-center justify-between w-full mb-4">
        <span className="text-xl font-bold text-crimson-500 dark:text-crimson-400">
          💲{product.price}
        </span>
        <span className="text-sm text-yellow-500">
          {product.rating.rate} <span className="text-gray-500 dark:text-gray-400">🌟</span>
        </span>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-3 w-full">
        <button
          onClick={() => addToCartHandler(product)}
          className={`flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md focus:outline-none transition-colors duration-200 ${
            isInCart
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isInCart ? <MdOutlineRemoveShoppingCart size={20} /> : <MdAddShoppingCart size={20} />}
        </button>
        <button
          onClick={() => addToWishListHandler(product)}
          className={`flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md focus:outline-none transition-colors duration-200 ${
            isInWishlist
              ? 'bg-pink-500 text-white hover:bg-pink-600'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600'
          }`}
        >
          {isInWishlist ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
        </button>
      </div>

      {/* Stock Indicator */}
      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
        {product.rating.count} left
      </div>
    </div>
  );
}