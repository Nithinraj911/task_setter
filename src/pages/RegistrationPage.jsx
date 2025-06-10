import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { createData } from '../api/commonAPI'



const RegistrationPage = () => {

  const navigate = useNavigate();

  const [formData , setFormData] = useState({
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    newpassword:'',
    confirmpassword:'',
  })

  const [error , setError] = useState({
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    newpassword:'',
    confirmpassword:'',
  })

  const handleChange =(e)=>{

    const {name,value} = e.target;

    setFormData(prevData => ({
      ...prevData,[name]:value
    }))

  }

  const handleSubmit = async (e)  =>{

    const newError= {};
    const nameRegex = /[a-zA-Z]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;


    if(!nameRegex.test(formData.firstname)){
      newError.firstname = "Enter your FirstName "
    }
    if(!nameRegex.test(formData.lastname)){
      newError.lastname = "Enter your lastName "
    }
    if(!usernameRegex.test(formData.username)){
      newError.username = "Allow only alphanumeric characters (letters and numbers), between 3 to 15 characters "
    }
    if(!emailRegex.test(formData.email)){
      newError.email= "enter a valid email"
    }
    if(!passwordRegex.test(formData.newpassword)){
      newError.newpassword= "enter a valid Password"
    }
    if(formData.newpassword !== formData.confirmpassword){
        newError.confirmpassword = "password is different"
    }

    setError(newError);

    if(Object.keys(newError).length !== 0){
     
      return console.log(newError);
     }

    try {

      const res = await createData("/api/register" , formData);
      if(res.status == 201){
        console.log(res.data);
        navigate('/');
        alert("Welcome to our team");


      }
      
    } catch (error) {
     
      console.log(error);
      console.log(formData);
      
      
     
      }

      
      
    }

   

    



  

  return (
    <div className="container-fluid m-0 vh-100"style={{backgroundColor: "#3A59D1"}}>
      <div className='w-50'>
      <h1 className='text-white w-25 mx-2 my-0'>my__task</h1> 
      </div>
      
        <div className='row d-flex w-75 mt-5 mx-auto justify-content-center align-items-center  rounded' style={{backgroundColor: "#3D90D7"}}>{/*main row*/}
          <div className='row mt-4'> {/*row for Registeration*/}
            <div className='col-md-12 text-center'>
              <h1 className='text-white'>Registeration</h1>
            </div>
          </div>
          <div className='row'>{/*input main row*/}
          <div className='col-md-6 '>{/*left side input boxes*/}
          <div className="row">
        <div className="col-md-12 my-4">
          <input type="text" className={`form-control ${error.firstname ? 'is-invalid' : ''  }`} 
          name='firstname'
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First Name" />
          {error.firstname && <small style={{ color: 'red' }}>{error.firstname}</small>}
        </div>
        <div className="col-md-12 my-4">
          <input type="text" className={`form-control ${error.username ? 'is-invalid' : '' }`}
          name='username'
          value={formData.username}
          onChange={handleChange} 
          placeholder="User Name" />
          {error.username && <small style={{ color: 'red' }}>{error.username}</small>}

        </div>
        <div className="col-md-12 my-4">
          <input type="password" className={`form-control ${error.newpassword ? 'is-invalid' : '' }`} 
          name='newpassword' 
          value={formData.newpassword}
          onChange={handleChange} 
          placeholder="New Password" />
        {error.newpassword && <small className='invalid-feedback' style={{ color: 'red' }}>{error.newpassword}</small>}

        </div>

      </div>
          </div>
          <div className='col-md-6'>{/*right side input boxes*/}
          <div className="row">
        <div className="col-md-12 my-4">
          <input type="text" className={`form-control ${error.lastname ? 'is-invalid' : ''  }`}
          name='lastname' 
          value={formData.lastname}
          onChange={handleChange} 
          placeholder="Last Name" />
        {error.lastname && <small style={{ color: 'red' }}>{error.lastname}</small>}

        </div>
        <div className="col-md-12 my-4">
          <input type="email" className={`form-control ${error.email ? 'is-invalid' : ''  }`}
          name='email'
          value={formData.email}
          onChange={handleChange}
           placeholder="Email Id" />
        {error.email && <small style={{ color: 'red' }}>{error.email}</small>}

        </div>
        <div className="col-md-12 my-4">
          <input type="password" className={`form-control ${error.confirmpassword ? 'is-invalid' : ''  }`}
          name='confirmpassword'
          value={formData.confirmpassword}
          onChange={handleChange} 
          placeholder="Confirm password" />
          {error.confirmpassword && <small style={{ color: 'red' }}>{error.confirmpassword}</small>}

        </div>
      </div>
          </div>
          </div>
          <div className='row w-100'>
            <button className='border-0 mx-auto w-50 py-2 fw-5 fs-5 rounded my-4' style={{backgroundColor:"#8DD8FF"}}
            onClick={handleSubmit}>create my account</button>
          </div>
          
         
    </div>
        
      
    </div>
  )
}

export default RegistrationPage
