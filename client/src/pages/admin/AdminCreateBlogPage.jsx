import React from 'react'
import AdminNavBar from '../../components/adminComponents/AdminNavBar'

export default function AdminCreateBlogPage() {
  return (
    <>
        <AdminNavBar />
        <div id='admin-main-container'>
            <div className='admin-create-blog-page-header'>
                <h1>Write a blog</h1>
            </div>
            <div className='admin-create-blog-form-container' >
                <form className='admin-create-blog-form' action="">
                    <div className='admin-create-blog-title-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Blog title</h1>
                            <input type="text" name='title' id='admin-create-blog-title' placeholder='Enter blog title'/>
                        </label>
                    </div>
                    <div className='admin-create-blog-date-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Date</h1>
                            <input type="date" name='date' id='admin-create-blog-date'/>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Body</h1>
                            <textarea name="body" id='admin-create-blog-body'></textarea>
                        </label>
                    </div>
                    <button disabled='true' className='admin-submit-button'>Submit</button>
                </form>
            </div>     
        </div>
    </>
  )
}
