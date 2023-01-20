import React from 'react'


import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import {HiLocationMarker} from 'react-icons/hi';
import {FiPhoneCall} from 'react-icons/fi';
import {AiOutlineMail, AiOutlineFieldTime} from 'react-icons/ai';


export default function Contact() {
  return (
    <div className="contact-style">



  <div className="row banner justify-content-center mt-5">
    <div className="title-page col-sm-12 col-lg-6 col-md-6 justify-content-center text-center">
      <h2>Contact Us</h2>
    </div>
    <div className="col-sm-12 col-lg-3 col-md-3">
      <div className="banner text-center">
        <Image src="/banner-image.png" alt="" width={200} height={200} />
       </div>
    </div>
  </div>
  <div className="container">
<div className="section-title">
  <span>contact information</span>
  <h2>Alone We Can Do So Little Together We Can Do So Much</h2>
</div>

<div className="row list-info justify-content-center">
  <div className="card-info col-lg-3 col-md-5 col-sm-12 mb-2">
    <div className="contact-information-card">
      <div className="icon-contact">
      <AiOutlineMail className="icon-element" size={20} />

      </div>
      <h3>Email Address</h3>
      <p>
        <a href="mailto:aniskhemiri6@gmai.com">info@catchmyweb.com</a>
        <br></br>
        <a href="mailto:aniskhemiri6@gmai.com">contact@catchmyweb.com</a>
      </p>
    </div>
  </div>
  <div className="card-info col-lg-3 col-md-5 col-sm-12 mb-2">
  <div className="contact-information-card">
  <div className="icon-contact">
  <HiLocationMarker className="icon-element" size={20}/>
  </div>
      <h3>Adress</h3>
      <p>street Irak N°4, Bizerte tunis </p>
    </div>
  </div>
  <div className="card-info col-lg-3 col-md-5 col-sm-12 mb-2">
    <div className="contact-information-card">
      <div className="icon-contact">
      
      <FiPhoneCall className="icon-element" size={20}/>
      </div>
      
      <h3>Phone Number</h3>
      <p>+21697442912 </p>
      <p>+21622021127 </p>
    </div>
  </div>
  <div className="card-info col-lg-3 col-md-5 col-sm-12 mb-2">
  <div className="contact-information-card">
  <div className="icon-contact">
  <AiOutlineFieldTime  className="icon-element" size={20} />
  </div>
  
      <h3>Working Hours</h3>
      <p>Open Monday To Samsday
From 08.00 AM to 05.00 PM</p>
    </div>
  </div>

</div>



  <div className="section-title">
    <h2>Get In Touch</h2>
    </div>
    <div className="contact-form">
    <Form>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6">
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Your name *</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required />
      </Form.Group>
      </div>
      <div className="col-lg-6 col-md-6 ">
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address *</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>
      </div>
      <div className="col-lg-6 col-md-6">
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Subject *</Form.Label>
        <Form.Control type="text" placeholder="subject" required />
      </Form.Group>
      </div>
      <div className="col-lg-6 col-md-6">
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Phone Number *</Form.Label>
        <Form.Control type="text" placeholder="phone number" required/>
      </Form.Group>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your message *</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </Form.Group>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 w-100">
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        
      </Form.Group>
      <div className="col-lg-12 col-md-12 col-sm-12">
      <Button variant="primary" className="btn-special" type="submit">
        Submit
      </Button>
      </div>

      </div>
      </div>
    </Form>
 
    </div>
    </div>

    </div>
  )
}

