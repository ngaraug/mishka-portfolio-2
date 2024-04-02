import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <div id="main-container">
        <div className='content-holder-1'>
          <div className='content-holder-2'>
            <div className='picture-holder'>
              <img src="/images/home-page-image-2.jpg" alt="" className='mishka-image'/>
            </div>


            <div className='about-holder'>
              <div className='heading-holder'>
                <h1>Hi!</h1>
                <h1>I'm <span className='splletters'>Mishka</span></h1>
              </div>
              <div className='para-holder'>
                <p className='about-para'>
                Welcome, dear readers! I'm Mishka Archana, a literature enthusiast with a heart full of words. My journey with writing began at the tender age of 15, a sanctuary where my thoughts transformed into expressions, helping me navigate the complexities of emotions. Here, in my literary abode, you'll find a composite of perspectives on a myriad of topics, each piece a reflection of my inner world. As a voracious reader, I also dive into the realms of books, offering reviews that are as much an exploration as they are a guide. Writing is not just my passion; it's my way of making sense of the world. In this vast expanse of diverse viewpoints, I invite you to experience mine. Step into my world of words.
                </p>
              </div>


              {/* <div className='contacts-holder'>
                <div className='contact instagram'>
                  <a className='contact-link' href="">
                    <img className='contact-icon' src="/images/instagramSVG.svg" alt="" />
                  </a>
                </div>
                <div className='contact linkedin'>
                  <a className='contact-link' href="">
                    <img className='contact-icon' src="/images/linkedinSVG.svg" alt="" />
                  </a>
                </div>
                <div className='contact twitter'>
                  <a className='contact-link' href="">
                    <img className='contact-icon' src="/images/gmailSVG.svg" alt="" />
                  </a>
                </div>
                <div className='contact email'>
                  <a className='contact-link' href="">
                    <img className='contact-icon' src="/images/facebookSVG.svg" alt="" />
                  </a>
                </div>
              </div> */}


            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
