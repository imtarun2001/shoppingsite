// import React, { useContext } from 'react';
// import { BiSolidUserRectangle } from 'react-icons/bi';
// import { RiLockPasswordFill } from 'react-icons/ri';
// import { FcGoogle } from 'react-icons/fc';
// import { AppContext } from '../context/AppContext';
// import { useNavigate } from 'react-router-dom';

// export default function LogInPage() {
//   const {
//     gotoDashboard,
//     gotoSignUp,
//     logInFormData,
//     changeHandler,
//     submitHandler,
//   } = useContext(AppContext);

//   const navigate = useNavigate();

//   return (
//     <div
//       className="relative top-[70px] min-h-[70vh] text-white flex justify-center items-center bg-cover bg-center bg-no-repeat p-2"
//       style={{
//         backgroundImage:
//           'url("https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg")',
//       }}
//     >
//       <div className="text-[40px] font-black text-blue-900 animate-[moveupdown_15s_linear_infinite] font-[Lacquer]">
//         Welcome back🤩
//       </div>

//       <form onSubmit={submitHandler}>
//         <div className="w-[350px] h-[400px] bg-black flex flex-col justify-start items-center gap-5">
//           <div className="w-full text-center py-2 tracking-wider bg-yellow-400 text-purple-700 text-[20px] font-extrabold font-[Doto] relative">
//             LOGIN
//             <p
//               onClick={gotoDashboard}
//               className="absolute right-5 top-[23px] text-[17px] font-bold font-[Philosopher] tracking-wide bg-fuchsia-700 text-blue-500 px-2 rounded cursor-pointer transition duration-700"
//             >
//               Go back
//             </p>
//           </div>

//           <div className="w-full flex justify-center items-center">
//             <span className="text-[20.5px] bg-aqua text-black px-1 rounded-l border-2 border-aqua">
//               <BiSolidUserRectangle />
//               <sup className="text-red-600 text-sm">*</sup>
//             </span>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter email"
//               onChange={changeHandler}
//               value={logInFormData.email}
//               className="w-3/4 h-[25px] border-2 border-aqua pl-1 rounded-r"
//             />
//           </div>

//           <div className="w-full flex justify-center items-center">
//             <span className="text-[20.5px] bg-aqua text-black px-1 rounded-l border-2 border-aqua">
//               <RiLockPasswordFill />
//               <sup className="text-red-600 text-sm">*</sup>
//             </span>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter password"
//               onChange={changeHandler}
//               value={logInFormData.password}
//               className="w-3/4 h-[25px] border-2 border-aqua pl-1 rounded-r"
//             />
//           </div>

//           <div className="w-[90%] flex justify-end relative bottom-4">
//             <span
//               className="hover:underline cursor-pointer"
//               onClick={() => navigate('/notfound')}
//             >
//               Forgot password
//             </span>
//           </div>

//           <div className="w-[80%] flex justify-center">
//             <button
//               type="submit"
//               className="w-full py-1.5 text-[17px] font-bold font-[Philosopher] tracking-wider bg-fuchsia-700 text-white rounded transition duration-700 hover:scale-95"
//             >
//               LOGIN
//             </button>
//           </div>

//           <div className="w-[80%] flex items-center justify-center gap-2">
//             <div className="w-[45%] border-b border-gray-400" />
//             <span className="text-white">or</span>
//             <div className="w-[45%] border-b border-gray-400" />
//           </div>

//           <div className="w-[90%]">
//             <div
//               onClick={() => navigate('/loginwithgoogle')}
//               className="w-full py-1.5 flex items-center justify-center bg-blue-50 text-black text-[17px] font-bold font-[Philosopher] tracking-wider rounded cursor-pointer transition duration-700 hover:scale-95"
//             >
//               <span className="relative top-[1.5px] right-[5px] text-[23px]">
//                 <FcGoogle />
//               </span>
//               LOGIN WITH GOOGLE
//             </div>
//           </div>

//           <div className="text-white font-[Parkinsans] font-medium">
//             Don't have an account ?{' '}
//             <span
//               onClick={gotoSignUp}
//               className="hover:underline cursor-pointer"
//             >
//               SIGNUP
//             </span>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }




import React, { useContext } from 'react';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { AppContext } from '../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';

export default function LogInPage() {
  const { logInFormData, changeHandler, submitHandler } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center py-12">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                <BiSolidUserRectangle />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700"
                placeholder="Enter your email"
                onChange={changeHandler}
                value={logInFormData.email}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                <RiLockPasswordFill />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700"
                placeholder="Enter your password"
                onChange={changeHandler}
                value={logInFormData.password}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Link to="/forgot-password" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Or log in with
        </div>
        <button
          onClick={() => navigate('/loginwithgoogle')}
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2"
        >
          <FcGoogle className="mr-2" />
          Google
        </button>
        <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Don't have an account?
          <Link to="/signup" className="text-blue-500 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 ml-1">
            Sign Up
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