import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {

    let {isLoggedIn} = useContext(AppContext);

    if(isLoggedIn) {
        return children;
    }
    else {
        <Navigate to='/login'/>
    }

}
