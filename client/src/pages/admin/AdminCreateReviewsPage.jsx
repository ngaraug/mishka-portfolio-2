import React from 'react'
import AdminNavBar from '../../components/adminComponents/AdminNavBar'

export default function AdminCreateReviewsPage() {
  return (
    <>
        <AdminNavBar />
        <div id='admin-main-container'>
            <div className='admin-create-blog-page-header'>
                <h1>Write a review</h1>
            </div>
            <div className='admin-create-blog-form-container' >
                <form className='admin-create-blog-form' action="">
                    <div className='admin-create-blog-title-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Book title</h1>
                            <input type="text" name='title' id='admin-create-blog-title'/>
                        </label>
                    </div>
                    <div className='admin-create-blog-date-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Date</h1>
                            <input type="date" name='date' id='admin-create-blog-date'/>
                        </label>
                    </div>
                    <div className='admin-create-review-author-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Author</h1>
                            <input type="text" name='author' id='admin-create-blog-title'/>
                        </label>
                    </div>
                    <div className='admin-create-review-subgenre-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Sub genre</h1>
                            <input type="text" name='subgenere' id='admin-create-blog-title'/>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Plot overview</h1>
                            <textarea name="pOverview" id='admin-create-blog-body'></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Why you should read this book</h1>
                            <textarea name="why" id='admin-create-blog-body'></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Quotes</h1>
                            <textarea name="Quotes" id='admin-create-blog-body'></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>What to expect from the book</h1>
                            <textarea name="bExpect" id='admin-create-blog-body'></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Book analysis/ Personal opinion</h1>
                            <textarea name="bAnalysis" id='admin-create-blog-body'></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Flawas of the book</h1>
                            <textarea name="bFlaws" id='admin-create-blog-body'></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Similar reads</h1>
                            <textarea name="Similar" id='admin-create-blog-body'></textarea>
                        </label>
                    </div>
                    <div className='admin-upload-image'>
                        <label htmlFor='bImage'>Book cover photo</label>
                        <input type="file" accept='image/*' name="bImage" id="bImage" />
                    </div>
                    <button className='admin-submit-button' disabled='true'>Submit</button>
                </form>
            </div>     
        </div>
    </>
  )
}
