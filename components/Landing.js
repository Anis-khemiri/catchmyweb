import Link from 'next/link'
import React from 'react'
import styles from '../styles/Landing.module.css'



export default function Landing() {
  return (
    <>
    <div className="landing d-flex justify-content-center align-items-center">

    
    <div className="text-center justify-content-center align-items-center text-light">
      <h1>Taste the Creativity</h1>
      
      <p className={styles.paraglinding}>We design and build bespoke, good-looking, SEO friendly websites for cool companies. Just like this one. Clients love our process, and their customers love our creations.</p>
     <Link className="main-btn" href="#"><a className=" rounded-pill main-btn" >Get Started</a></Link>
    </div>
  </div>
  </>
  )
}
