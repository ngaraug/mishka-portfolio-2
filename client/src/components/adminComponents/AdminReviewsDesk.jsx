import React from 'react'
import reviews from '/public/Blogs/reviews.js'
import { useNavigate } from 'react-router-dom';

export default function AdminReviewsDesk() {
  const totalReviews = reviews.length;
  const allReviews = reviews; 
  const navigate = useNavigate()

  const handleClick = (e) =>{ 
    navigate('/admin/create-review')
  }
  return (
    <>
        <div className='admin-blogs-desktop'>
          <div>
            <div className='admin-total-no-of-blogs-container'>
              <h1>
                Total reviews till date
              </h1>
              <h2>
                {totalReviews}
              </h2>
            </div>
            <div className='admin-add-blog-button-container' onClick={handleClick}>
              <h1>
                Create a book review
              </h1>
              <img src="/images/plus.png" alt="add blog"/>
            </div>
            <div className='admin-all-blogs-container'>
              <div className='admin-all-blogs-container-heading'>
                <h1>
                  All reviews
                </h1>
              </div>
              <div>
                {
                  reviews.length > 0 ? reviews.map(review=>{
                    return(
                    <div key={review.id}>
                      <div className='admin-single-blog'>
                        <h1>{review.id} | {review.title.slice(0,40)}</h1>
                        <div className='admin-single-blog-buttons-container'>
                          <button className='admin-single-blog-button'>
                            <img src="/images/edit.png" alt="edit blog" className='admin-single-blog-icon' />
                          </button> 
                          <button className='admin-single-blog-button'>
                            <img src="/images/delete.png" alt="delete blog" className='admin-single-blog-icon'/>
                          </button>
                        </div>
                      </div>
                    </div>
                    )
                  }) : (
                    <div className='admin-single-blog'>
                      No reviews
                    </div>
                  )
                  
                }
              </div>
            </div>
          </div>
        </div>   
    </>
  )
}
