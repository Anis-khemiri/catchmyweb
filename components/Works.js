import Image from 'next/image';
import dataPortfolio from './data/dataPortfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faArrowsToDot} from '@fortawesome/free-solid-svg-icons'
import Tabs from './Tab';

export default function Works() {
  return (
    <div>
      <div className="our-work text-center pt-5 pb-5">
      <div className="container">
      <div className="main-title mt-5 mb-5 text-light position-relative">
          <FontAwesomeIcon icon={faArrowsToDot} className="mainIcon mt-3 mb-5" />
            <h2 className="text-dark">We Make This</h2>
            <p className="text-dark text-uppercase">Prepare To Be Amazed</p>
          </div>
   
          <div className="row">
          <Tabs />
          </div>

          <div className="d-flex justify-content-center mt-5">
            <a className="btn rounded-pill main-btn text-uppercase" href="#">
              I Want More
            </a>
          </div>
          </div>
        </div>
    
    </div>
  );
}
