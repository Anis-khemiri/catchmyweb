
import Image from 'next/image';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

import {faArrowsToDot} from '@fortawesome/free-solid-svg-icons';
export default function Technology() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="techs pt-5 pb-5 text-center">
        <div className="container">
        <div className="main-title mt-3 mb-5 text-dark position-relative">
          <FontAwesomeIcon icon={faArrowsToDot} className="mainIcon mt-3 mb-5" />
            <h2 className="text-dark">clients testimonial</h2>
            <p className="text-dark text-uppercase">What client they say ?</p></div>

<div className="row gap-auto testimonial">

<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          className="testimon"
          src="/testimonials-1.jpg" width={80} height={80}
     alt="First slide"
        />
        <div className="testinfo">
          <h3>First slide label</h3>
          <FaQuoteLeft />
          <p className="testpara">lorem ipsu Lorem ipsum dolor sit amet, consectetur adipiscing elit 
     Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdumdfjgivodfjgiodfjgoidfjhgojdhfoghiqdofqghoiqdfhjgoiqdsfhgiojqdshfiogdofisgjojgdf</p>
     <FaQuoteRight />
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="testimon"
          src="/testimonials-2.jpg" width={80} height={80}
          alt="Second slide"
        />

        <div>
          <h3>Second slide label</h3>
          <FaQuoteLeft />
          <p>Lorem ipsum dolor sit amet, lorem ipsu Lorem ipsum dolor sit amet, consectetur adipiscing elit
            Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdumdfjgivodfjgiodfjgoidfjhgojdhfoghiqdofqghoiqdfhjgoiqdsfhgiojqdshfiogdofisgjojgdfconsectetur adipiscing elit.</p>
            <FaQuoteRight />
          </div>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="testimon"
          src="/testimonials-3.jpg" width={80} height={80}
          alt="Third slide"
        />

        <div>
          <h3>Third slide label</h3>
          <FaQuoteLeft />
          <p>
            Praesent commodo lorem ipsu Lorem ipsum dolor sit amet, consectetur adipiscing elit
            Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdumdfjgivodfjgiodfjgoidfjhgojdhfoghiqdofqghoiqdfhjgoiqdsfhgiojqdshfiogdofisgjojgdfcursus magna, vel scelerisque nisl consectetur.
          </p>
          <FaQuoteRight />
          </div>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="testimon"
          src="/testimonials-4.jpg" width={80} height={80}
     alt="First slide"
        />
        <div className="testinfo">
          <h3>First slide label</h3>
          <FaQuoteLeft />
          <p className="testpara">lorem ipsu Lorem ipsum dolor sit amet, consectetur adipiscing elit 
     Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdumdfjgivodfjgiodfjgoidfjhgojdhfoghiqdofqghoiqdfhjgoiqdsfhgiojqdshfiogdofisgjojgdf</p>
     <FaQuoteRight />
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="testimon"
          src="/testimonials-5.jpg" width={80} height={80}
     alt="First slide"
        />
        <div className="testinfo">
          <h3>First slide label</h3>
          <FaQuoteLeft />
          <p className="testpara">lorem ipsu Lorem ipsum dolor sit amet, consectetur adipiscing elit 
     Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdumdfjgivodfjgiodfjgoidfjhgojdhfoghiqdofqghoiqdfhjgoiqdsfhgiojqdshfiogdofisgjojgdf</p>
     <FaQuoteRight />
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="testimon"
          src="/testimonials-6.jpg" width={80} height={80}
     alt="First slide"
        />
        <div className="testinfo">
          <h3>First slide label</h3>
          <FaQuoteLeft />
          <p className="testpara">lorem ipsu Lorem ipsum dolor sit amet, consectetur adipiscing elit 
     Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdumdfjgivodfjgiodfjgoidfjhgojdhfoghiqdofqghoiqdfhjgoiqdsfhgiojqdshfiogdofisgjojgdf</p>
     <FaQuoteRight />
        </div>
        
      </Carousel.Item>
    </Carousel>
  

        </div>
      
    </div>
    </div>
  )


  
  }