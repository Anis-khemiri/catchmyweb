
import Image from 'next/image';

export default function Blog() {
  return (
    <div>
      <div className="blog pt-5 pb-5">
        <div className="container">
          <div className="main-title text-center mt-5 mb-5 position-relative">
        
            <h2>Read Our Blog</h2>
            <p className="text-uppercase text-black-50">New Stories</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
              <Image src="/project1.png" width="200px" height="200px" 
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <span className="text-black-50">Jan 17, 2022</span>
                  <h5 className="card-title">Some Awesome Blog Title Here</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                 <Image src="/project1.png" width="200px" height="200px" 
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <span className="text-black-50">Jan 17, 2022</span>
                  <h5 className="card-title">Some Awesome Blog Title Here</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
              <Image src="/project1.png" width="200px" height="200px" 
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <span className="text-black-50">Jan 17, 2022</span>
                  <h5 className="card-title">Some Awesome Blog Title Here</h5>
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
