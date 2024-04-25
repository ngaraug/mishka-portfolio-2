import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <>
        <div id='footer-main-container'>
            <div className='footer-body-container'>
                <div className='footer-logo-container'>
                    <div className='footer-logo-holder'>
                        <img className='footer-logo' src="/images/transparent-logo-1.png" alt="Mishka Archana" />
                        <div className='flex flex-col text-white'>
                            <span>Reach out to me at: </span>
                            <span className='footer-email'>Inboxmishka.ar@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className='footer-links-holder'>
                            <div className='footer-page-links'>
                                <span className='text-white'>Find out more about me.</span>
                                <div className='flex flex-col justify-evenly h-3/5'>
                                    <a href="/articles">articles</a>
                                    <a href="/blogs">blogs</a>
                                    <a href="/reviews">book reviews</a>
                                </div>
                            </div>
                            <div className='footer-socials-links'>
                                <span className='text-white '>Follow me.</span>
                                <div className='flex flex-col justify-evenly  h-3/5'>
                                    <a href="https://www.facebook.com/deardairytalks?mibextid=LQQJ4d">Facebook</a>
                                    <a href="https://www.instagram.com/thedeardiarytalks?igsh=MWN4NjZzeGdxemxteA==">Instagram</a>
                                    <a href="https://www.linkedin.com/in/mishka-bhagat-7b33001b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a>
                                </div>
                            </div>
                        </div>
            </div>
            <div className='footer-copyrights-container'>
                <div className='copy-rights'>
                    <FaRegCopyright /><span>Copyrights Mishka Archana 2024.</span>
                </div>
                <div className='dev-by'>
                    <p> <a href="https://www.linkedin.com/in/gaurang-mestry-6b84a0230">This site was made with love by Gaurang</a></p>
                </div>
            </div>
        </div>
    </>
  )
}
