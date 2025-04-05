// import React, { useContext, useEffect } from 'react';

// import Filterbar from '../components/Filterbar';
// import Products from '../components/Products';
// import Spinner from '../components/Spinner';
// import { AppContext } from '../context/AppContext';

// export default function DashboardPage() {
//   const { loading, fetchProducts } = useContext(AppContext);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-5 pt-[80px]">
//       <div>
//         <Filterbar />
//       </div>
//       <div>
//         {loading ? <Spinner /> : <Products />}
//       </div>
//     </div>
//   );
// }






import React, { useContext, useEffect } from 'react';
import Filterbar from '../components/Filterbar';
import Products from '../components/Products';
import Spinner from '../components/Spinner';
import { AppContext } from '../context/AppContext';

export default function DashboardPage() {
  const { loading, fetchProducts } = useContext(AppContext);

  useEffect(() => {
    fetchProducts();
  }, []); // Added dependency array

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Filterbar />
      <div className="container mx-auto py-8">
        {loading ? <Spinner /> : <Products />}
      </div>
    </div>
  );
}