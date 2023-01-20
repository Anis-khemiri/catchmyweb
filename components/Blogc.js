
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faArrowsToDot} from '@fortawesome/free-solid-svg-icons';

export default function Blog() {
  return (
    <div>
      <div className="blog text-center pt-5 pb-5">
        <div className="container">
        <div className="main-title mt-5 mb-5 text-light position-relative">
          <FontAwesomeIcon icon={faArrowsToDot} className="mainIcon mt-3 mb-5" />
        
            <h2>Read Our Blog</h2>
            <p className="text-uppercase text-light">New Stories</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
              <Image src="/speed.jpg" width={200} height={200}
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <span className="text-black-50">Jan 17, 2022</span>
                  <h5 className="card-title">Make your web pages fast on all devices</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                 <Image src="/optimiser-site-seo.jpg" width={200} height={200} 
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <span className="text-black-50">Jan 17, 2022</span>
                  <h5 className="card-title">HOW TO CREATE AN SEO STRATEGY</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
              <Image src="/digital.jpg" width={200} height={200}
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <span className="text-black-50">Jan 17, 2022</span>
                  <h5 className="card-title">Digital Marketing</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5 mb-5">
            <a className="btn rounded-pill main-btn text-uppercase" href="#">
              More Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
