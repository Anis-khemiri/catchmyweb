import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Navbar1() {
  return (
    <div className={styles.navbar}>
      <nav className="navbar navbar-expand-lg transparent-header sticky-header sticky-lg-top">
        <div className="container">
          <Link href="/" className={styles.navbarBrand}>
              <Image src="/logo1.png" alt="" width="150" height="60" />
            
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <Link href="/" className="nav-link active p-lg-3" >Home</Link>
              <Link href="/about" className="nav-link p-lg-3">About</Link>
              <Link href="/service" className="nav-link p-lg-3">Service</Link>
              <Link href="/works" className="nav-link p-lg-3">Work</Link>

              <Link href="/blog" className="nav-link p-lg-3">Blog</Link>
              <Link href="/contact" className="nav-link p-lg-3">Contact</Link>

              <div className="socialIcon p-3">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.faceIcon}
                />
                <FontAwesomeIcon icon={faTwitter} className={styles.twitIcon} />
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  className={styles.instaIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar1;
