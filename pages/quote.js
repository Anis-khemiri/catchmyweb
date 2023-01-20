import React from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

export default function Quote() {
  return (
    <div className="section-quote">
        <div className="container">
<div className="quote-title text-center mb-3 p-5">
    <h2 className="">Request your free quote!</h2>
    <p className='p-5 fs-4'>Catchmyweb is there to carry out your e-commerce projects, website, showcase website, custom website and natural referencing. Request your free quote now</p>
</div>
<div className="quote-form mb-6">
<Form>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Your name *</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required />
      </Form.Group>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address *</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>site you need it *</Form.Label>
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Form.Group>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Phone Number *</Form.Label>
        <Form.Control type="text" placeholder="phone number" required/>
      </Form.Group>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>DESCRIBE YOUR PROJECT IN A FEW WORDS *</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </Form.Group>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
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
