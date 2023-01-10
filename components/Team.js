import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faArrowsToDot} from '@fortawesome/free-solid-svg-icons';

export default function Team() {
  return (
    <>
     
     <div className="stuff pt-5">
      <div className="container">
      <div className="main-title text-center mt-5 mb-5 text-light position-relative">
          <FontAwesomeIcon icon={faArrowsToDot} className="mainIcon mt-3 mb-5" />
           
            <h2>Some Stuff About Us</h2>
            <p className="text-light text-uppercase">Our Story</p>
          </div>
          <p className="description text-light text-center mb-5 m-auto">
          
We focus on creating solid, intuitive and dynamic sites.
CATCHMYWEB was created in August 2022 by ANIS and NEJI with the desire to solve all the problems in web development and create sites in order to optimize your presence on the net in a universe where there are too many developers but the experts aren’t much.We put all our experience and all our know-how for your satisfaction.We will tend to become a reference in the world of the web thanks to our skills which are at your fingertips.
          </p>
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 text-center text-md-start">
              <div className="text-light">
                <h4> Our Approach</h4>
                <p className="text-light fs-6">
               
We know that the user is at the center of every business
To best meet your needs, we carry out a complete study of your activity and provide you with a fully dedicated project manager. And because each project is unique, we create specific developments for each client. We know that your time is valuable and that return on investment is a primary objective. This is why we are committed to carrying out your project as soon as possible and at the right price.
                </p>
              
                <a className="btn rounded-pill main-btn text-uppercase" href="#">Order Me One</a>
              </div>
            </div>
            <div className="col-lg-6 ms-auto">
        <div className="image ">
          <Image src="/team1.jpg" alt="" width= "600" height= "400" />
        </div>
      </div>
            </div>
            </div>
            </div>
           
    </>
  )
}
