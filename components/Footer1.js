import Styles from "./../styles/Footer.module.css";
import Link from "next/link";


import { AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';







function Footer1() {
  return (

<>
    <div className="subscribe pt-5 pb-5 text-center text-md-start">
    <div className="container">
      <form className="row align-items-center">
        <div className="col-md-6 col-lg-3">
          <div className="fw-bold fs-5 mb-3">Subscribe to our Newsletter:</div>
        </div>

        {/* contact */}
        <div className="col-md-6 col-lg-7 mb-3">
          <input className="w-100 text-light p-2 bg-transparent" type="text" placeholder="Enter Email Address" />
        </div>
        <div className="col-md-6 col-lg-2">
          <input className="btn rounded-pill" type="submit" value="Subscribe" />
        </div>
      </form>
    </div>
  </div><div className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
    <div className="container">
      <div className="row position-relative">
        <div className="col-md-6 col-lg-4">
          <div className="infofooter mb-5">
         
            <p className="mb-5">
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed,
              convallis at tellus.
            </p>
            <div className="copyright">
              Created By <span>Agency</span>
              <div>&copy; 2022 - <span>CatchMyWeb</span></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-2">
          <div className="links">
            <h5 className="text-light">Links</h5>
            <ul className="list-unstyled lh-lg">
              <li>Home</li>
              <li>Our Services</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
              <li>Support</li>
              <li>Terms and Condition</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-2">
          <div className="links">
            <h5 className="text-light">About Us</h5>
            <ul className="list-unstyled lh-lg">
              <li>Sign In</li>
              <li>Register</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="contact">
            <h5 className="text-light">Contact Us</h5>
            <p className="lh-lg mt-3 mb-5">Get in touch with us via mail phone.We are waiting for your call or message</p>
            <Link href="#"><a className="btn rounded-pill main-btn w-100 btncon" >conatct@catchmyweb.com</a></Link>
            <ul className="d-flex justify-content-center mt-2 mb-4 list-unstyled gap-3">
              <li>
                <a className="d-block text-light" href="#">
                <i className="fa-brands fa-2x facebook rounded-circle p-2"><AiFillFacebook /></i></a>
              </li>
              <li>
                <a className="d-block text-light" href="#">
                <i className="fa-brands fa-twitter fa-2x twitter rounded-circle p-2"><AiFillTwitterCircle /></i></a>
          
              </li>
              <li>
                <a className="d-block text-light" href="#">
                <i className=" linkedin fa-2x rounded-circle p-2"><AiFillLinkedin /></i></a>
              </li>
              <li>
                <a className="d-block text-light" href="#">
                <i className=" instagram fa-2x rounded-circle p-2"><AiFillInstagram /></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>  

  )

  }
export default Footer1;
