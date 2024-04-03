import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Blog(props) {
    const {id, title, shortTitle, body} = props;
    const shortBody = body.substring(0, 200)
    const navigate = useNavigate()

    const handleClick = (e) =>{
      const blogId = e.target.id
      const blogLink = '/blogs/' + blogId
      navigate(blogLink)

    }
    
  return (
    <>
        <div className='single-blog-container'>
            <div className='blog' id={id} onClick={handleClick}>
              <h1 className='blog-title' id={id} onClick={handleClick}>{title}</h1>
              {/* <h1 className='blog-short-title'>{shortTitle}</h1> */}
              <p className='blog-short-body' id={id} onClick={handleClick}>{shortBody}...</p>
            </div>
        </div>
    </>
  )
}


