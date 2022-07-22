import Link from 'next/link'
import React from 'react'

export default function Landing() {
  return (
    <>
    <div className="landing d-flex justify-content-center align-items-center">
  <div className="video">
  <video loop autoPlay>         
    <source src="./video.mp4" type="video/mp4"  />       
</video>
        </div>
    <div className="text-center text-light">
      <h1>Taste the Creativity</h1>
      
      <p className="fs-6 text-white-50 mb-5">We make awesome graphic and web design</p>
     <Link className="main-btn" href="#"><a className=" rounded-pill main-btn" >Get Started</a></Link>
    </div>
  </div>
  </>
  )
}
