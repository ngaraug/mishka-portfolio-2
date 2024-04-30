import React from 'react'
import AdminNavBar from '../../components/adminComponents/AdminNavBar'
import { useState, useEffect } from 'react'
import AdminArticlesDesk from '../../components/adminComponents/AdminArticlesDesk'
import AdminBlogsDesk from '../../components/adminComponents/AdminBlogsDesk'
import AdminReviewsDesk from '../../components/adminComponents/AdminReviewsDesk'

export default function AdminHome() {

  const [pageState, setPageState] = useState('blogs')
  const handlePages = (e) => {
    setPageState(e.target.id)   
  }
  return (
    <>
        <AdminNavBar />
        <div id="admin-main-container">
            {/* Page state selector section*/}
            <div className='admin-home-header'>
                <div className='admin-home-selector-holder'>
                    <button id='blogs' className={pageState === 'blogs' ? 'admin-blog-selector admin-content-selector-label admin-content-selector-label-active' : 'admin-blog-selector admin-content-selector-label'} onClick={handlePages}>
                      Blogs
                    </button>
                    <button id='articles' className={pageState === 'articles' ? 'admin-blog-selector admin-content-selector-label admin-content-selector-label-active' : 'admin-blog-selector admin-content-selector-label'}  onClick={handlePages}>
                      Articles
                    </button>
                    <button id='reviews' className={pageState === 'reviews' ? 'admin-blog-selector admin-content-selector-label admin-content-selector-label-active' : 'admin-blog-selector admin-content-selector-label'}  onClick={handlePages}>
                      Reviews
                    </button>
                    
                </div>
            </div>
            {
              pageState === 'blogs' ? (
                <AdminBlogsDesk />
              ) : pageState === 'articles' ?(
                <AdminArticlesDesk />
              ) : pageState === 'reviews' ? (
                <AdminReviewsDesk />
              ) : (
                <div>
                  Please select a page from above 👆
                </div>
              )
            }
        </div>
    </>
  )
}

