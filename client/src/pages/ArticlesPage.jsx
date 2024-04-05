import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { LuConstruction } from "react-icons/lu";


export default function ArticlesPage() {
  return (
    <>
      <NavBar />
      <div id="main-container">
          <div className='under-construction'>
            <LuConstruction />
            <h1>Page under <span className='splletters'>construction !</span></h1>
          </div>
        </div>
       <Footer />
    </>
    
  )
}
