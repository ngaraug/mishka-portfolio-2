import React from 'react'
import NavBar from '../../components/NavBar'
import { useState } from 'react'
import { Alert, Spinner } from 'flowbite-react'

export default function AdminLogin() {
  const [password, setPassword] = useState({'password': ''})
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>{
    setPassword({'password' : e.target.value})
    console.log(password)
  } 
  
  //Replace for changepass
  const handleSubmit = async (e) =>{
    var data = {}
    e.preventDefault()
    if(password.password === ''){
      setLoading(true);
      setErrorMessage("Please enter valid password");
      setLoading(false)
    }else{
      setLoading(true)
      console.log(password)
      try {
        const res = await fetch("http://localhost:3000/api/auth/adminsignin", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(password)
        })
        data = await res.json();
        if(data.passmatch){
          setErrorMessage(null);
          
        }else{
          setErrorMessage('Wrong Password');
        }
      } catch (error) {
        console.log(error)
        setErrorMessage('Status: 404 BACKEND_SERVER_NOT_FOUND');
      }

      setPassword({'password': ''})
      setLoading(false)
    }
  }
  //Replace for changepass👆

  return (
    <>
        <NavBar />
        <div id="admin-main-container">
          <div className='all-content-holder'>
            <h1 className='heading'>Admin Desktop</h1>
            <div className='form-holder'>
              {
                loading && (
                  <form action="" className='admin-form'>
                    <Spinner color="purple" size='xl' />  
                  </form>
                  
                )
              }
              {
                !loading && (
                  // Replace for changepass
                  <form action="" className='admin-form'>
                    <h3 className='text-2xl pt-6'>Enter Password</h3>
                    <input id="password" className='login-input text-xl px-3 border-0 rounded-lg focus:border-purple-700 focus:border-2' placeholder='Password' type="password" required onChange={handleChange}/>
                    <button className='login-button mb-6' onClick={handleSubmit}><img className='login-button-img' src="/images/login-arrow.png" alt="" /></button> 
                  </form>
                  //Replace for changepass👆
                ) 
              }
              
            </div>
            {
                  errorMessage && (
                    <Alert color="failure" className='mt-2 text-lg'>
                      <span>&#9432; {errorMessage} </span>
                    </Alert>    
                  )
                }
          </div>
        </div>
    </>
  )
}
