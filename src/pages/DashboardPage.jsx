import React, { useContext, useEffect } from 'react'

import Filterbar from '../components/Filterbar';
import Products from '../components/Products';
import Spinner from '../components/Spinner';
import { AppContext } from '../context/AppContext';
import './Dashboard.css'

export default function DashboardPage() {

  let {loading,fetchProducts} = useContext(AppContext);

  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <div className='dashboard'>
      
      <div>
        <Filterbar></Filterbar>
      </div>
      <div>
        {
          loading ? <Spinner></Spinner> : <Products></Products>
        }
      </div>
    </div>
  )
}
