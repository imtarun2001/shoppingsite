// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function NotFoundPage() {
//   const navigate = useNavigate()

//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden">
//       <svg
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[500px] animate-pulse"
//         viewBox="0 0 837 1045"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g fill="none">
//           <path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
//             stroke="#007FB2" strokeWidth="6" className="animate-float delay-0" />
//           <path d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
//             stroke="#EF4A5B" strokeWidth="6" className="animate-float delay-[0.2s]" />
//           <path d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
//             stroke="#795D9C" strokeWidth="6" className="animate-float delay-[0.4s]" />
//           <path d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
//             stroke="#F2773F" strokeWidth="6" className="animate-float delay-[0.6s]" />
//           <path d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
//             stroke="#36B455" strokeWidth="6" className="animate-float delay-[0.8s]" />
//         </g>
//       </svg>

//       <div className="absolute top-1/2 left-1/2 w-[380px] -translate-x-1/2 -translate-y-1/2 text-white font-light font-['Roboto']">
//         <h1 className="text-6xl mb-6">404</h1>
//         <h3 className="text-xl">Page not found</h3>
//         <div className="mt-10">
//           <button
//             onClick={() => navigate(-1)}
//             className="bg-cyan-300 hover:bg-indigo-400 text-white font-bold text-sm px-6 py-2 rounded transition duration-300"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }





import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500 dark:text-red-400 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate('/')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline ml-4"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}