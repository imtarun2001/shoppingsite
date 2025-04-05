import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FiLogIn } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Title() {
  const { cartProducts, wishListProducts, isLoggedIn, gotoDashboardNLogOut } =
    useContext(AppContext);

  return (
    <nav className="w-full bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Side: Cart and Wishlist */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative flex items-center text-lg hover:text-blue-200 transition">
            <BsCart4 size={20} />
            <span className="ml-2 font-semibold">Cart</span>
            {cartProducts.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">{cartProducts.length}</span>
            )}
          </Link>
          <Link to="/wishlist" className="relative flex items-center text-lg hover:text-blue-200 transition">
            <MdFavorite size={20} />
            <span className="ml-2 font-semibold">Wishlist</span>
            {wishListProducts.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">{wishListProducts.length}</span>
            )}
          </Link>
        </div>

        {/* Center: Logo/Title */}
        <Link
          to="/"
          className="text-2xl font-serif font-bold text-yellow-300 hover:text-yellow-400 transition"
        >
          FlipZon
        </Link>

        {/* Right Side: Login/Logout and Signup */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={gotoDashboardNLogOut}
              className="flex items-center text-lg hover:text-blue-200 transition focus:outline-none"
            >
              <FiLogIn size={20} className="mr-1" />
              <span>Logout</span>
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center text-lg hover:text-blue-200 transition focus:outline-none"
              >
                <FiLogIn size={20} className="mr-1" />
                <span>Login</span>
              </Link>
              <Link
                to="/signup"
                className="flex items-center text-lg hover:text-blue-200 transition focus:outline-none"
              >
                <FaUserPlus size={20} className="mr-1" />
                <span>Signup</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}