import React, { useState } from 'react'
import AdminNavBar from '../../components/adminComponents/AdminNavBar'
import { Alert, Spinner } from 'flowbite-react'

export default function AdminCreateReviewsPage() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [author, setAuthor] = useState('')
    const [subGenre, setSubGenre] = useState('')
    const [pOverview, setPOverview] = useState('')
    const [why, setWhy] = useState('')
    const [quotes, setQuotes] = useState('')
    const [bExpect, setBExpect] = useState('')
    const [bAnalysis, setBAnalysis] = useState('')
    const [bFlaws, setBFlaws] = useState('')
    const [similar, setSimilar] = useState('')
    const [bImage, setBImage] = useState('')

    const [error, setError] = useState(false)
    const [reviewUploaded, setReviewUploaded] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)

    const convertToBase64 = (e) =>{
        const reader = new FileReader()
        const uploadedImage = e.target.files[0] 

        //Converting to base64
        reader.readAsDataURL(uploadedImage)
        reader.onloadend = () =>{
            console.log(reader.result)
            //Setting state
            setBImage(reader.result)
        }
        reader.onerror = ()=>{
            alert("Failed to convert image")
        }
    }

    const handleSubmit = async (e)=>{
        var data = {}
        e.preventDefault()
        if(title.length == 0 || date.length == 0 || author.length == 0 || bImage.length == 0){
            console.log("ERROR: Check all required fields")
            setError(true)
            setErrorMsg("ERROR: Check all required fields")
        }else{
            setError(false)
            setLoading(true)
            const body = {
                'title': title,
                'date': date,
                'author': author,
                'subGenre': subGenre,
                'pOverview' : pOverview,
                'why': why,
                'quotes' : quotes,
                'bExpect': bExpect,
                'bAnalysis': bAnalysis,
                'bFlaws': bFlaws, 
                'similar': similar,
                'bImage': bImage
            };
            try{
                const res = await fetch("http://localhost:3000/api/review/addreview", {
                    method: 'POST',
                    headers : {'Content-Type' : 'application/json'},
                    body: JSON.stringify(body)
                })
                data = await res.json();
                console.log(data)
                setLoading(false)
                setReviewUploaded(true) 
                setTimeout(() => {
                    setReviewUploaded(false)
                    }, 4000);
            }catch (error){
                console.log(error)
                setError(true)
                setErrorMsg("Error uploading review")
                setLoading(false)
            }
        }
    }
 
  return (
    <>
        <AdminNavBar />
        <div id='admin-main-container'>
            <div className='admin-create-blog-page-header'>
                <h1>Write a review</h1>
            </div>
            <div className='admin-create-blog-form-container' >
                <div className='admin-create-blog-form'>
                    <div className='admin-create-blog-title-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Book title</h1>
                            <input type="text" name='title' id='admin-create-blog-title' onChange={(e)=> setTitle(e.target.value)}/>
                        </label>
                    </div>
                    <div className='admin-create-blog-date-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Date</h1>
                            <input type="date" name='date' id='admin-create-blog-date' onChange={(e)=> setDate(e.target.value)}/>
                        </label>
                    </div>
                    <div className='admin-create-review-author-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Author</h1>
                            <input type="text" name='author' id='admin-create-blog-title' onChange={(e)=> setAuthor(e.target.value)}/>
                        </label>
                    </div>
                    <div className='admin-create-review-subgenre-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Sub genre</h1>
                            <input type="text" name='subGenre' id='admin-create-blog-title' onChange={(e)=> setSubGenre(e.target.value)}/>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Plot overview</h1>
                            <textarea name="pOverview" id='admin-create-blog-body' onChange={(e)=> setPOverview(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Why you should read this book</h1>
                            <textarea name="why" id='admin-create-blog-body' onChange={(e)=> setWhy(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Quotes</h1>
                            <textarea name="quotes" id='admin-create-blog-body' onChange={(e)=> setQuotes(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>What to expect from the book</h1>
                            <textarea name="bExpect" id='admin-create-blog-body' onChange={(e)=> setBExpect(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Book analysis/ Personal opinion</h1>
                            <textarea name="bAnalysis" id='admin-create-blog-body' onChange={(e)=> setBAnalysis(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Flaws of the book</h1>
                            <textarea name="bFlaws" id='admin-create-blog-body' onChange={(e)=> setBFlaws(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className='admin-create-blog-body-container'>
                        <label>
                            <h1 className='admin-blog-input-titles'>Similar reads</h1>
                            <textarea name="similar" id='admin-create-blog-body' onChange={(e)=> setSimilar(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className='admin-upload-image'>
                        <label className='admin-upload-image-label' htmlFor='bImage'>Book cover photo</label>
                        <input type="file" accept='image/*' name="bImage" id="bImage" onChange={convertToBase64}/>
                        <div>{
                            bImage == "" ? <div  id='admin-review-uploaded-image-preview-text'>Upload image for preview</div> : <img id='admin-review-uploaded-image-preview' src={bImage} alt="" />
                            }
                        </div>
                    </div>
                    {
                        error && (
                            <div className='admin-upload-image bg-transparent'>
                                <Alert color="failure" className='mt-2 text-lg'>
                                <span>&#9432; {errorMsg} </span>
                                </Alert>  
                            </div>
                        )
                    }
                    {
                        reviewUploaded &&(
                            <div className='admin-upload-image bg-transparent'>
                                <Alert color="success" className='mt-2 text-lg'>
                                <span>&#9927; Review uploaded! 'local' </span>
                                </Alert>  
                            </div>
                        )
                    }
                    {
                        loading && (
                        <div className='admin-upload-image h-16 flex justify-center'>
                            <div>
                                <span className='pr-4'>Uploading...</span>
                                <Spinner color="purple" size='md' />  
                            </div>
                        </div>
                    
                    )
                }
                    <button className='admin-submit-button' onClick={handleSubmit} disabled={false}>Submit</button> 
                </div>
            </div>     
        </div>
    </>
  )
}
