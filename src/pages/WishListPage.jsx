// import React, { useContext } from 'react'
// import { AppContext } from '../context/AppContext'
// import WishListProduct from '../components/WishListProduct'

// export default function WishListPage() {
//   const { wishListProducts, wishListTotalPrice, gotoCart } = useContext(AppContext)

//   return (
//     <div className="min-h-screen bg-[aliceblue] text-black flex flex-col items-center justify-center gap-[50px] px-2 py-[30px] font-sans relative">

//       {/* Title */}
//       <div className="fixed top-[100px] left-[870px] text-[40px] font-medium font-['Ubuntu']">
//         My Wishlist💗✨
//       </div>

//       {/* Main container */}
//       <div className="flex w-[1260px] justify-start items-start">

//         {/* Products */}
//         <div className="mt-[50px] flex flex-col gap-[20px]">
//           {wishListProducts.map(product => (
//             <WishListProduct key={product.id} product={product} />
//           ))}
//         </div>

//         {/* Checkout box */}
//         <div className="fixed right-[70px] top-[200px] min-h-[50vh] bg-yellow-400 border border-black px-[10px] py-[20px] flex flex-col items-center justify-center gap-[30px]">
//           <div className="text-[23px] font-semibold font-['Source_Code_Pro']">
//             Total items: <span className="font-black text-purple-800">{wishListProducts.length}</span>
//           </div>
//           <div className="text-[23px] font-semibold font-['Source_Code_Pro']">
//             Total Amount: <span className="font-black text-purple-800">💲{wishListTotalPrice}</span>
//           </div>
//           <button
//             onClick={gotoCart}
//             className="px-[100px] py-[10px] text-[20px] font-semibold bg-green-400 text-black border-[5px] border-green-800 outline-[2px] outline-black rounded-md hover:scale-[1.03] transition-all duration-300"
//           >
//             Go to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }









import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import WishListProduct from '../components/WishListProduct';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function WishListPage() {
  const { wishListProducts, wishListTotalPrice } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 flex items-center">
          <BsHeartFill className="mr-2 text-pink-500" /> My Wishlist
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product list */}
          <div className="lg:col-span-2">
            {wishListProducts.length > 0 ? (
              <div className="space-y-4">
                {wishListProducts.map((product) => (
                  <WishListProduct key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-gray-600 dark:text-gray-400 text-center py-10">
                Your wishlist is empty.
              </div>
            )}
          </div>

          {/* Wishlist Summary */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 sticky top-20">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Wishlist Summary
            </h2>
            <div className="border-b border-gray-200 dark:border-gray-700 py-4">
              <p className="text-gray-600 dark:text-gray-400">
                Total <span className="font-semibold text-pink-500">{wishListProducts.length}</span> items
              </p>
            </div>
            <div className="py-4">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Estimated Total: <span className="text-purple-600 dark:text-purple-400">💲{wishListTotalPrice}</span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Note: This is an estimated total. Actual price may vary.
              </p>
            </div>
            {wishListProducts.length > 0 && (
              <Link
                to="/cart"
                className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md focus:outline-none transition-colors duration-200"
              >
                Go to Cart
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}