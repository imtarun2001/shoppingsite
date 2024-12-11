import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Product from './Product';
import './Products.css'

export default function Products() {

    let {getProducts} = useContext(AppContext);

  return (
    <div className='products'>
        {
            getProducts().map((product) => {
                return <Product key={product.id} product={product}/>
            })
        }
    </div>
  )
}
