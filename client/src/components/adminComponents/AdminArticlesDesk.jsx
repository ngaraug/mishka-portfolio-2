import React from 'react'
import blogs from '/public/Blogs/blogs.js'

export default function AdminArticlesDesk() {
  const totalBlogs = blogs.length;
  const allBlogs = blogs; 
  return (
    <>
        <div className='admin-blogs-desktop'>
          <div>
            <div className='admin-total-no-of-blogs-container'>
              <h1>
                Total articles till date
              </h1>
              <h2>
                {totalBlogs}
              </h2>
            </div>
            <div className='admin-add-blog-button-container'>
              <h1>
                Create an article
              </h1>
              <img src="/images/plus.png" alt="add blog"/>
            </div>
            <div className='admin-all-blogs-container'>
              <div className='admin-all-blogs-container-heading'>
                <h1>
                  All Articles
                </h1>
              </div>
              <div>
                {
                  blogs.map(blog=>{
                    return(
                    <>
                    <div className='admin-single-blog'>
                      <h1>{blog.title.slice(0,40)}</h1>
                      <div className='admin-single-blog-buttons-container'>
                        <button className='admin-single-blog-button'>
                          <img src="/images/edit.png" alt="edit blog" className='admin-single-blog-icon' />
                        </button>
                        <button className='admin-single-blog-button'>
                          <img src="/images/delete.png" alt="delete blog" className='admin-single-blog-icon'/>
                        </button>
                      </div>
                    </div>
                    </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>   
    </>
  )
}
