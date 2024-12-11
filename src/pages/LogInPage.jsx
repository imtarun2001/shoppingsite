import React, { useContext } from 'react'
import { BiSolidUserRectangle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

import './LogInPage.css';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';


export default function LogInPage() {

  let {gotoDashboard,gotoSignUp,logInFormData,changeHandler,submitHandler} = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='loginpage'>
      <div className='welcomeback'>Welcome back🤩</div>
      <form onSubmit={submitHandler}>
      <div className='userdetails'>
          <div className='logintext'>LOGIN <p className='goback' onClick={gotoDashboard}>Go back</p></div>
          <div className='username'><span><BiSolidUserRectangle/><sup>*</sup></span><input type="email" name="email" id="email" placeholder='Enter email' onChange={changeHandler} value={logInFormData.email}/></div>
          <div className='username'><span><RiLockPasswordFill/><sup>*</sup></span><input type="password" name="password" id="password" placeholder='Enter password' onChange={changeHandler} value={logInFormData.password}/></div>
          <div className='forgotpassword'><span onClick={() => {navigate('/notfound')}}>Forgot password</span></div>
          <div className='loginbuttonholder'><button>LOGIN</button></div>
          <div className='or'><div></div><span>or</span><div></div></div>
          <div className='loginwithgoogle'><div onClick={() => {navigate('/loginwithgoogle')}}><span><FcGoogle/></span> LOGIN WITH GOOGLE</div></div>
          <div className='donthaveanaccount'>Don't have an account ? <span onClick={gotoSignUp}>SIGNUP</span></div>
      </div>
      </form>
    </div>
  )
}
