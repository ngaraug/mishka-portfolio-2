import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

import blogs from '../../public/Blogs/blogs'
import _ from 'lodash'

export default function SingleBlogPage() {
    const allBlogs = blogs;
    const params = useParams();
    const blogTitle = params.blogTitle

    var title = "Blog not found!"
    var body =  "Blog not found!"

    allBlogs.forEach(blog => {
        if(_.kebabCase(blog.title) === blogTitle){
            title = blog.title
            body = blog.body
        }
    })
    
  return (
    <> 
        <NavBar />
        <div id="main-container">
            <div className='page-container'>
                <div className='blog-container '>
                    <div className='blog-header'>
                        <h1 className='single-blog-title'>{ title }</h1>
                        <div className='blog-title-extra'>
                            <span className='blog-by'>by <span className='splletters'>Mishka</span></span>
                            
                        </div>
                    </div>
                    <div className='blog-body'>
                         <p>
                         { body }
                         </p>
                         <span className='blog-posted-date'>Posted on: 12th July, 2023 10:45pm</span>  
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
