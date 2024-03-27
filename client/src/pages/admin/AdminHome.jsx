import React from 'react'
import NavBar from '../../components/NavBar'

export default function AdminHome() {
  return (
    <>
        <NavBar />
        <div id="main-container">
          <div className='all-content-holder'>
            <h1 className='heading'>Admin Desktop</h1>
            <div className='form-holder'>
              <form action="" className='admin-form'>
                <h3 className='text-2xl pt-6'>Enter Password</h3>
                <input className='login-input text-xl px-3' type="password" />
                <button className='login-button mb-6'><img className='login-button-img' src="/images/login-arrow.png" alt="" /></button>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}
