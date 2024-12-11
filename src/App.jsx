import './App.css'

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

  let {dark} = useContext(AppContext);

  return (
    <div className='app' id={dark ? 'dark' : 'light'}>
      <div>
        <Title></Title>
      </div>

      <Routes>
        <Route path="/shoppingsite" element={<Navigate to="/" />} />
        <Route path='/' element={<DashboardPage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/cart' element={<PrivateRoute><CartPage/></PrivateRoute>}/>
        <Route path='/wishlist' element={<PrivateRoute><WishListPage/></PrivateRoute>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}

export default App
