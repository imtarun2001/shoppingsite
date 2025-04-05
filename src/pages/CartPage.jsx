// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import CartProduct from '../components/CartProduct';
// import { IoMdLock } from 'react-icons/io';
// import { BsCart4 } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';

// export default function CartPage() {
//   const { cartProducts, price } = useContext(AppContext);
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-[50px] bg-[aliceblue] text-black p-[30px_10px] relative">
//       {/* Title */}
//       <div className="fixed top-[100px] left-[870px] text-[40px] font-[500] font-['Ubuntu'] flex items-center">
//         My Cart &nbsp; <BsCart4 /> ✨
//       </div>

//       {/* Content */}
//       <div className="flex w-[1260px] flex-row justify-start items-start">
//         {/* Product list */}
//         <div className="mt-[50px] flex flex-col gap-[20px]">
//           {cartProducts.map((product) => (
//             <CartProduct key={product.id} product={product} />
//           ))}
//         </div>

//         {/* Checkout Panel */}
//         <div className="fixed top-[200px] right-[70px] bg-yellow-300 border border-black p-[20px_10px] flex flex-col justify-center items-center gap-[30px] min-h-[50vh]">
//           <div className="text-[23px] font-semibold font-['Source_Code_Pro']">
//             Total <span className="font-extrabold text-fuchsia-800">{cartProducts.length}</span> items
//           </div>
//           <div className="text-[23px] font-semibold font-['Source_Code_Pro']">
//             Total Amount : <span className="font-extrabold text-fuchsia-800">{price.toFixed(2)}</span> 💲
//           </div>
//           <button
//             className="flex items-center justify-center px-[100px] py-[10px] text-[20px] font-semibold bg-green-400 text-black border-[5px] border-green-800 outline-[2px] outline-black rounded"
//             onClick={() => navigate('/checkout')}
//           >
//             <IoMdLock className="mr-4" />
//             Check out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import CartProduct from '../components/CartProduct';
import { IoMdLock } from 'react-icons/io';
import { BsCart4 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cartProducts, price } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 flex items-center">
          <BsCart4 className="mr-2" /> My Cart <span className="text-yellow-500 ml-1">✨</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product list */}
          <div className="lg:col-span-2">
            {cartProducts.length > 0 ? (
              <div className="space-y-4">
                {cartProducts.map((product) => (
                  <CartProduct key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-gray-600 dark:text-gray-400 text-center py-10">
                Your cart is empty.
              </div>
            )}
          </div>

          {/* Checkout Panel */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 sticky top-20">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Order Summary
            </h2>
            <div className="border-b border-gray-200 dark:border-gray-700 py-4">
              <p className="text-gray-600 dark:text-gray-400">
                Total <span className="font-semibold text-blue-500">{cartProducts.length}</span> items
              </p>
            </div>
            <div className="py-4">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Total Amount: <span className="text-fuchsia-600 dark:text-fuchsia-400">💲{price.toFixed(2)}</span>
              </p>
            </div>
            {cartProducts.length > 0 && (
              <button
                onClick={() => navigate('/checkout')}
                className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md focus:outline-none transition-colors duration-200"
              >
                <IoMdLock className="mr-2" />
                Check out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}