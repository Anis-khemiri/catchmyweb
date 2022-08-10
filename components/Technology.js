import React from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faArrowsToDot} from '@fortawesome/free-solid-svg-icons';
export default function Technology() {
  return (
    <div className="techs pt-5 pb-5 text-center">
        <div className="container">
        <div className="main-title mt-3 mb-5 text-dark position-relative">
          <FontAwesomeIcon icon={faArrowsToDot} className="mainIcon mt-3 mb-5" />
            <h2 className="text-dark">Our Tech Stack</h2>
            <p className="text-dark text-uppercase">
              We solve it problems with technology 
            </p>
          </div>

<div className="row">
<div className="col-sm-6 col-md-4 col-lg-3">
    <Image src="/js.png" width="100" height="100" alt="" />
</div>
<div className="col-sm-6 col-md-4 col-lg-3">
    <Image src="/vue.png" width="100" height="100" alt="" />
</div>
<div className="col-sm-6 col-md-4 col-lg-3">
    <Image src="/react.png" width="100" height="100" alt="" />
</div>
<div className="col-sm-6 col-md-4 col-lg-3">
    <Image src="/redux.png" width="100" height="100" alt="" />
</div>
<div className="col-sm-6 col-md-4 col-lg-3">
    <Image src="/angu.png" width="100" height="100" alt="" />
</div>
<div className="col-sm-6 col-md-4 col-lg-3">
    <Image src="/angu.png" width="100" height="100" alt="" />
</div>
<div className="col-sm-6 col-md-4 col-lg-3">
    <Image src="/dart.png" width="100" height="100" alt="" />
</div>
<div className="col-sm-6 col-md-4 col-lg-3">
    <Image src="/angu.png" width="100" height="100" alt="" />
</div>

</div>


        </div>
      
    </div>
  )
}
