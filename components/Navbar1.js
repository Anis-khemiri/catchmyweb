import Link from "next/link";
import styles from '../styles/Navbar.module.css'



 function Navbar1() {
  return (
    <div className={styles.navbar}>
   <nav className="navbar d-flex navbar-expand-lg p-3 stiky" >
  <div className="container-fluid">
  <Link href="/"><a className={styles.navbarBrand}>CatchMyWeb</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto ">
        <Link href="/"><a className="nav-link active p-lg-3" aria-current="page" >Home</a></Link>
        <Link href="/about"><a className="nav-link p-lg-3">About</a></Link>
        <Link href="/service"><a className="nav-link p-lg-3">Service</a></Link>
        <Link href="/works"><a className="nav-link p-lg-3">Work</a></Link>

        <Link href="/blog"><a className="nav-link p-lg-3">Blog</a></Link>
        <Link href="/contact"><a className="nav-link p-lg-3">Contact</a></Link>
      
     
      
      </div>
    </div>
  </div>
</nav>
   
         
    </div>
  )
}
export default Navbar1