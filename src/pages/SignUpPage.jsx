import React, { useContext } from 'react'
import { BiSolidUserRectangle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function SignUpPage() {

  const navigate = useNavigate();

  let {gotoDashboard,gotoLogIn,signUpFormData,signUpChangeHandler,signUpSubmitHandler} = useContext(AppContext);

  return (
    <div className='loginpage'>
    <div className='welcomeback'>Create Account🤩</div>
    <form onSubmit={signUpSubmitHandler}>
      <div className='userdetails'>
          <div className='logintext'>SIGNUP <p className='goback' onClick={gotoDashboard}>Go back</p></div>
          <div className='username'><span><BiSolidUserRectangle/><sup>*</sup></span><input type="email" name="semail" id="semail" placeholder='Enter email' onChange={signUpChangeHandler} value={signUpFormData.semail}/></div>
          <div className='username'><span><RiLockPasswordFill/><sup>*</sup></span><input type="password" name="spassword" id="spassword" placeholder='Create password' onChange={signUpChangeHandler} value={signUpFormData.spassword}/></div>
          <div className='username'><span><RiLockPasswordFill/><sup>*</sup></span><input type="password" name="scpassword" id="scpassword" placeholder='Confirm password' onChange={signUpChangeHandler} value={signUpFormData.scpassword}/></div>
          <div className='loginbuttonholder'><button>CREATE ACCOUNT</button></div>
          <div className='or'><div></div><span>or</span><div></div></div>
          <div className='loginwithgoogle'><div onClick={() => {navigate('/loginwithgoogle')}}><span><FcGoogle/></span> SIGNUP WITH GOOGLE</div></div>
          <div className='donthaveanaccount'>Already an user ? <span onClick={gotoLogIn}>LOGIN</span></div>
      </div>
    </form>
  </div>
  )
}
