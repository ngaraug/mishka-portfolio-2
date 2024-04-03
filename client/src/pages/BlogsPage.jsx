import React from 'react'
import NavBar from '../components/NavBar'
import Blog from '../components/Blog.jsx'
import Footer from '../components/Footer.jsx'
import _ from 'lodash'


import blogs from '../../public/Blogs/blogs.js'

export default function BlogsPage() {
  return (
    <>
      <NavBar />
      <div id="main-container">

      <div className='page-container'>
          <div className='page-contents'>
            <h1 className='page-title'> <span className='splletters'>Blogs  </span>by Mishka </h1>
            <div id='all-blogs-container'>
              {
                blogs.map((data) =>{
                  const kebabcase = _.kebabCase(data.title)
                  return <Blog key={data.id} id={kebabcase} title={data.title} shortTitle={data.shortTitle} body={data.body}/>
                })
              }
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
