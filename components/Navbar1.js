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
          <Link href="/">
            <a className={styles.navbarBrand}>
              <Image src="/logo1.png" alt="" width="150" height="60" />
            </a>
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
              <Link href="/">
                <a className="nav-link active p-lg-3" aria-current="page">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="nav-link p-lg-3" aria-current="page">
                  About
                </a>
              </Link>
              <Link href="/service">
                <a className="nav-link p-lg-3">Service</a>
              </Link>
              <Link href="/works">
                <a className="nav-link p-lg-3">Work</a>
              </Link>

              <Link href="/blog">
                <a className="nav-link p-lg-3">Blog</a>
              </Link>
              <Link href="/contact">
                <a className="nav-link p-lg-3">Contact</a>
              </Link>

              <div className="socialIcon p-3 d-none d-lg-block">
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
