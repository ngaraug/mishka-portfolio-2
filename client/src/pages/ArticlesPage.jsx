import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { LuConstruction } from "react-icons/lu";


export default function ArticlesPage() {
  return (
    <>
      <NavBar />
      <div id="main-container">
          <div className='w-full h-screen flex flex-col justify-center text-5xl pl-96'>
            <LuConstruction />
            <h1>Page under <span className='splletters'>construction !</span></h1>
          </div>
        </div>
       <Footer />
    </>
    
  )
}
