import React, { useEffect } from 'react'

export default function NavBar() {
  return (
    <>

    <nav className="nav">
        <div className="container">
            <div className="logo">
                <a href="/" id='home-logo-link'><img id='mishka-logo' src="/images/transparent-logo-1.png" alt="" /></a>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li><a href="/articles">Articles</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                    <li><a href="/reviews">Reviews</a></li>
                </ul>
            </div>
            <span className="navTrigger" onClick={callNavTrigger}>
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    
    </>
  )
}

function callNavTrigger(){
    let navTrigger = document.querySelector('.navTrigger')
    navTrigger.classList.toggle('active');
    console.log("Clicked menu");
    document.getElementById("mainListDiv").classList.toggle("show_list");
    document.getElementById("mainListDiv").style.display = "block";

    const navDiv = document.querySelector(".nav")
    navDiv.classList.toggle("darkNav")

    const logo = document.querySelector("#home-logo-link")
    logo.classList.toggle("invertedColor")

    navTrigger.classList.toggle("invertedColor")


}



