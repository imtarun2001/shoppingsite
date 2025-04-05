// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import Product from './Product';

// export default function Products() {
//   const { getProducts } = useContext(AppContext);

//   return (
//     <div className="w-[1270px] flex flex-wrap justify-center gap-10">
//       {getProducts().map((product) => (
//         <Product key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }






import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Product from './Product';

export default function Products() {
  const { getProducts } = useContext(AppContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
      {getProducts().map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}