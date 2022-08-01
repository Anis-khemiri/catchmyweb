import React from 'react'
import Image from 'next/image'
export default function Team() {
  return (
    <>
     
       <div className="stuff pt-5">
      
          <div className="main-title text-center mt-5 mb-5 position-relative">
           
            <h2>Some Stuff About Us</h2>
            <p className="text-black-50 text-uppercase">The Great Team</p>
          </div>
          <p className="description text-center mb-5 text-black-50 m-auto">
            Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.
          </p>
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 text-center text-md-start">
              <div className="text">
                <h4>Retina Design</h4>
                <p className="text-black-50 fs-6">
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget
                  tincidunt nibh pulvinar a.
                </p>
                <p className="text-black-50 fs-6">
                  Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie
                  malesuada.
                </p>
                <a className="btn rounded-pill main-btn text-uppercase" href="#">Order Me One</a>
              </div>
            </div>
            <div className="col-lg-3 ms-auto">
        <div className="image ">
          <Image className="img-fluid" src="/project1.png" alt="" width= "400px" height= "400" />
        </div>
      </div>
            </div>
            </div>
           
    </>
  )
}
