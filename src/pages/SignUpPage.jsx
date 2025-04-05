// import React, { useContext } from 'react'
// import { BiSolidUserRectangle } from "react-icons/bi"
// import { RiLockPasswordFill } from "react-icons/ri"
// import { FcGoogle } from "react-icons/fc"
// import { AppContext } from '../context/AppContext'
// import { useNavigate } from 'react-router-dom'

// export default function SignUpPage() {
//   const navigate = useNavigate()
//   const { gotoDashboard, gotoLogIn, signUpFormData, signUpChangeHandler, signUpSubmitHandler } = useContext(AppContext)

//   return (
//     <div className="relative min-h-[70vh] pt-20 flex justify-center items-center bg-cover bg-center bg-no-repeat px-2" style={{ backgroundImage: 'url("https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg")' }}>
//       <div className="text-[40px] font-extrabold text-blue-900 font-['Lacquer'] absolute animate-moveupdown">Create Account🤩</div>

//       <form onSubmit={signUpSubmitHandler} className="w-[350px] h-[400px] bg-black flex flex-col gap-5 items-center justify-start p-4">
//         <div className="relative w-full text-center py-2 text-[20px] font-extrabold bg-yellow-400 text-indigo-700 font-['Doto'] tracking-wide">
//           SIGNUP
//           <p onClick={gotoDashboard} className="absolute right-4 top-[18px] px-2 py-1 text-[17px] font-bold font-['Philosopher'] bg-fuchsia-700 text-blue-700 rounded-md cursor-pointer transition-all duration-500 hover:scale-105">Go back</p>
//         </div>

//         {/* Email */}
//         <div className="w-full flex items-center justify-center">
//           <span className="text-xl bg-cyan-400 text-black px-2 py-[2px] rounded-l-md flex items-center">
//             <BiSolidUserRectangle />
//             <sup className="text-red-600 ml-0.5">*</sup>
//           </span>
//           <input
//             type="email"
//             name="semail"
//             id="semail"
//             placeholder="Enter email"
//             onChange={signUpChangeHandler}
//             value={signUpFormData.semail}
//             className="w-[75%] h-[25px] px-2 border-2 border-cyan-400 rounded-r-md outline-none"
//           />
//         </div>

//         {/* Password */}
//         <div className="w-full flex items-center justify-center">
//           <span className="text-xl bg-cyan-400 text-black px-2 py-[2px] rounded-l-md flex items-center">
//             <RiLockPasswordFill />
//             <sup className="text-red-600 ml-0.5">*</sup>
//           </span>
//           <input
//             type="password"
//             name="spassword"
//             id="spassword"
//             placeholder="Create password"
//             onChange={signUpChangeHandler}
//             value={signUpFormData.spassword}
//             className="w-[75%] h-[25px] px-2 border-2 border-cyan-400 rounded-r-md outline-none"
//           />
//         </div>

//         {/* Confirm Password */}
//         <div className="w-full flex items-center justify-center">
//           <span className="text-xl bg-cyan-400 text-black px-2 py-[2px] rounded-l-md flex items-center">
//             <RiLockPasswordFill />
//             <sup className="text-red-600 ml-0.5">*</sup>
//           </span>
//           <input
//             type="password"
//             name="scpassword"
//             id="scpassword"
//             placeholder="Confirm password"
//             onChange={signUpChangeHandler}
//             value={signUpFormData.scpassword}
//             className="w-[75%] h-[25px] px-2 border-2 border-cyan-400 rounded-r-md outline-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="w-[80%]">
//           <button
//             type="submit"
//             className="w-full py-2 text-[17px] font-bold font-['Philosopher'] bg-fuchsia-700 text-white rounded-md cursor-pointer transition-transform duration-300 active:scale-95"
//           >
//             CREATE ACCOUNT
//           </button>
//         </div>

//         {/* OR Divider */}
//         <div className="w-[80%] flex items-center justify-center gap-2">
//           <div className="w-[45%] border-b border-gray-400" />
//           <span className="text-white">or</span>
//           <div className="w-[45%] border-b border-gray-400" />
//         </div>

//         {/* Google Signup */}
//         <div className="w-[90%]">
//           <div
//             onClick={() => navigate('/loginwithgoogle')}
//             className="w-full py-2 bg-blue-50 text-black rounded-md flex items-center justify-center text-[17px] font-bold font-['Philosopher'] gap-2 cursor-pointer transition-transform duration-300 active:scale-95"
//           >
//             <span className="text-[23px]"><FcGoogle /></span>
//             SIGNUP WITH GOOGLE
//           </div>
//         </div>

//         {/* Already have account */}
//         <div className="text-white font-medium font-['Parkinsans'] text-sm">
//           Already an user?{' '}
//           <span
//             onClick={gotoLogIn}
//             className="underline cursor-pointer text-blue-300 hover:text-blue-100"
//           >
//             LOGIN
//           </span>
//         </div>
//       </form>
//     </div>
//   )
// }






import React, { useContext } from 'react';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { AppContext } from '../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUpPage() {
  const { signUpFormData, signUpChangeHandler, signUpSubmitHandler } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center py-12">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={signUpSubmitHandler} className="space-y-4">
          <div>
            <label htmlFor="semail" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                <BiSolidUserRectangle />
              </div>
              <input
                type="email"
                id="semail"
                name="semail"
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700"
                placeholder="Enter your email"
                onChange={signUpChangeHandler}
                value={signUpFormData.semail}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="spassword" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                <RiLockPasswordFill />
              </div>
              <input
                type="password"
                id="spassword"
                name="spassword"
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700"
                placeholder="Create password"
                onChange={signUpChangeHandler}
                value={signUpFormData.spassword}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="scpassword" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                <RiLockPasswordFill />
              </div>
              <input
                type="password"
                id="scpassword"
                name="scpassword"
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700"
                placeholder="Confirm your password"
                onChange={signUpChangeHandler}
                value={signUpFormData.scpassword}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Or sign up with
        </div>
        <button
          onClick={() => navigate('/loginwithgoogle')}
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2"
        >
          <FcGoogle className="mr-2" />
          Google
        </button>
        <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Already have an account?
          <Link to="/login" className="text-blue-500 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 ml-1">
            Log In
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
            Go back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}