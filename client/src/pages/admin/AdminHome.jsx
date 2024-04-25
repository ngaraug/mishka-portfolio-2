import React from 'react'
import NavBar from '../../components/NavBar'

export default function AdminHome() {
  return (
    <>
        <NavBar />
        <div id="admin-main-container">
            <div className='admin-home-header'>
                <h1 className='admin-home-heading'>Admin Desktop</h1>
                <div className='admin-home-selector-holder'>
                    <input type="radio" name="content-type" id="articles" className='hidden admin-content-selector'/>
                    <input type="radio" name="content-type" id="blogs" className='hidden admin-content-selector'/>
                    <input type="radio" name="content-type" id="reviews" className='hidden admin-content-selector'/>

                    <label htmlFor="articles" className='admin-content-selector-label'>My Articles</label>
                    <label htmlFor="blogs" className='admin-content-selector-label'>My Blogs</label>
                    <label htmlFor="reviews" className='admin-content-selector-label'>My Reviews</label>
                </div>
            </div>
        </div>
    </>
  )
}
