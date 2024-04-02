import React from 'react'

export default function Blog(props) {
    const {id, title, shortTitle, body} = props;
    const shortBody = body.substring(0, 200)
  return (
    <>
        <div className='single-blog-container'>
            <div className='blog'>
              <h1 className='blog-title'>{title}</h1>
              {/* <h1 className='blog-short-title'>{shortTitle}</h1> */}
              <p className='blog-short-body'>{shortBody}<a href="" className='link-to-blog'>  ...Read blog</a></p>
            </div>
        </div>
    </>
  )
}


