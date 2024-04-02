import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function SingleBlogPage() {
  return (
    <> 
        <NavBar />
        <div id="main-container">
            <div className='page-container'>
                <div className='blog-container '>
                    <div className='blog-header'>
                        <h1 className='blog-title'>Hold on or Let go?</h1>
                        <div className='blog-title-extra'>
                            <span className='blog-by'>by <span className='splletters'>Mishka</span></span>
                            
                        </div>
                    </div>
                    <div className='blog-body'>
                         <p>
                         Why not let go that's not worth holding on? Why not hold on to what's not worth letting go? After all we are all humans and humans die. Don’t they? Why waste time fighting, showing whose right, drifting apart? Aren’t we all wasting our time as such fighting every day to be together with someone then why waste time by not loving them not telling them what you feel, not telling you care, not letting go, not holding on. Life seems very short when you have a partner and very long and when you don’t so if you have why not keep them forever. Why not fight for `us’ instead of `me’ why not fight to stay why not fight so that nothing comes along your beautiful relation. Why not know the difference between holding on and letting go!
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
