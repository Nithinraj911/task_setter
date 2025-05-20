import React from 'react'

const LoginPage = () => {
  return (
    <div style={{backgroundColor: "#3A59D1"}}>
      <div className='w-50'>
      <h1 className='text-white w-25 mx-2 my-0'>my__task</h1> 
      </div>
      
    <div className="d-flex justify-content-center align-items-center container-fluid" style={{ overflow: "hidden" ,minHeight:"93vh"}}>
      
      <div className="h-50 w-25 p-4 rounded" style={{backgroundColor: "#3D90D7"}}>
        <h1 className='text-center'>Login</h1>

        <div className="row">
          <input className='col-md-12 form-control  my-4 rounded border-0'
          style={{height:"45px"}}
           type="email" 
           id='loginemail'
          placeholder='Enter your email'/>

<input className='col-md-12 mt-4 form-control  rounded border-0'
          style={{height:"45px"}}
           type="password" 
           id='loginpassword'
          placeholder='Enter your password'/>
          <label className='mt-1' htmlFor="loginpassword">forget password
          </label>

          <div className='my-4 p-0'>
             
            <h6 className='col-md-12 text-white text-center'>Register an account</h6>
            <button className='col-md-12 rounded text-white  border-0 p-0' style={{backgroundColor: "#3A59D1", height:"45px"}}>Login</button>

          </div>
         

        </div>
        
      </div>
    </div>
    </div>
  )
}

export default LoginPage
