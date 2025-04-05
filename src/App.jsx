// import Title from './components/Title';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import LogInPage from './pages/LogInPage';
// import SignUpPage from './pages/SignUpPage';
// import CartPage from './pages/CartPage';
// import DashboardPage from './pages/DashboardPage';
// import WishListPage from './pages/WishListPage';
// import NotFoundPage from './pages/NotFoundPage';
// import PrivateRoute from './pages/PrivateRoute';
// import { useContext } from 'react';
// import { AppContext } from './context/AppContext';

// function App() {
//   const { dark } = useContext(AppContext);

//   return (
//     <div
//       className={`min-h-screen flex justify-center items-center box-border ${
//         dark ? 'bg-black text-aliceblue' : 'bg-aliceblue text-black'
//       }`}
//     >
//       <div>
//         <Title />
//         <Routes>
//           <Route path="/shoppingsite" element={<Navigate to="/" />} />
//           <Route path="/" element={<DashboardPage />} />
//           <Route path="/login" element={<LogInPage />} />
//           <Route path="/signup" element={<SignUpPage />} />
//           <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
//           <Route path="/wishlist" element={<PrivateRoute><WishListPage /></PrivateRoute>} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;



import Title from './components/Title';
import { Route, Routes, Navigate } from 'react-router-dom';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import DashboardPage from './pages/DashboardPage';
import WishListPage from './pages/WishListPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './pages/PrivateRoute';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const { dark } = useContext(AppContext);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        dark ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-800'
      }`}
    >
      <Title />
      <div className="flex-grow flex justify-center items-center p-4">
        <div className="w-full max-w-7xl">
          <Routes>
            <Route path="/shoppingsite" element={<Navigate to="/" />} />
            <Route path="/" element={<DashboardPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
            <Route path="/wishlist" element={<PrivateRoute><WishListPage /></PrivateRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;