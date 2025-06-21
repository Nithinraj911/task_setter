import React from 'react'
import { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom';
import { createData } from '../api/commonAPI';




const LoginPage = () => {

  const apiURL = import.meta.env.VITE_APP_SERVER_URL;
  const navigate = useNavigate();
  


  console.log(apiURL);
  

  const [loginForm , setLoginForm] = useState({
    email :"",
    password: ""
  });
  
  const [error , setError] = useState({
    email :"",
    password: ""
  })
  
  
  const handleEmailChange = (e) =>{
  
    const emailValue = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
  
     setLoginForm(
      (prve) => ({...prve , email : emailValue})
     );
    
    if(!emailRegex.test(emailValue)){
      setError((perv)=> ({...perv ,email:"Enter your correct email id"}))
      
    }else{
      setError((perv)=> ({...perv ,email:""}))
    }
   
  }
  
  const handlePasswordChange = (e) =>{
  
    const passwordvalue = e.target.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
  
    setLoginForm(
      (prve) => ({...prve , password : passwordvalue })
     );
    
    if(!passwordRegex.test(passwordvalue)){
      setError((perv)=> ({...perv ,password:"Enter password with 8char one cap letter one small letter one symbol"}))
      
    }else{
      setError((perv)=> ({...perv ,password:""}))
    }
    
  }
  
  const handleSubmit = async (e) =>{
  
    e.preventDefault();
  
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if(!emailRegex.test(loginForm.email)){
      setError((perv)=> ({...perv ,email:"Enter your correct email id"}))
      return
    }
  
    if(!passwordRegex.test(loginForm.password)){
      setError((perv)=> ({...perv ,password:"Enter password with 8char one cap letter one small letter one symbol"}))
      return
    }
    
  
      try {

        const res = await createData("/api/login",loginForm);
        if(res.status == 200){
          const {user,token} = res.data;
          navigate("/home",{state:{user,token}});


          

        }
  
  
        
      } catch (error) {
        
      }
  
    
  }

  return (
    <div style={{backgroundColor: "#3A59D1"}}>
      <div className='w-50'>
      <h1 className='text-white w-25 mx-2 my-0'>my__task</h1> 
      </div>
      
    <div className="d-flex justify-content-center align-items-center container-fluid" style={{ overflow: "hidden" ,minHeight:"93vh"}}>
      
      <div className="h-50 w-25 p-4 rounded" style={{backgroundColor: "#3D90D7"}}>
        <h1 className='text-center'>Login</h1>

        <div className="row">
          <input className={`col-md-12 form-control  my-4 rounded border-0 ${error.email ? 'is-invalid': ''}`}
          style={{height:"45px"}}
           type="email" 
           value={loginForm.email}
           onChange={handleEmailChange}
           id='loginemail'
          placeholder='Enter your email'/>
          {error.email && <small style={{ color: 'red' }}>{error.email}</small> }

<input className={`col-md-12 mt-4 form-control  rounded border-0 ${error.password ? 'is-invalid': ''}`}
          style={{height:"45px"}}
           type="password" 
           id='loginpassword'
           value={loginForm.password}
           onChange={handlePasswordChange}
          placeholder='Enter your password'/>
          {error.password && <small style={{ color: 'red' }}>{error.password}</small> }
          <label className='mt-1' htmlFor="loginpassword">forget password
          </label>

          <div className='my-4 p-0'>
             
            <h6 className='col-md-12 text-white text-center'>Register an account</h6>
            <button className='col-md-12 rounded text-white  border-0 p-0' onClick={handleSubmit} style={{backgroundColor: "#3A59D1", height:"45px"}}>Login</button>

          </div>
         

        </div>
        
      </div>
    </div>
    </div>
  )
}

export default LoginPage
