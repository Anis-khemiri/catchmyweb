import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from 'react-slide-fade-in';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faSquareInstagram} from '@fortawesome/free-brands-svg-icons';

import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons';

export default function Meeteam() {
  return (
    <div className="team text-center pb-5 pt-5">
      <div className="container">
        <div className="main-title mt-5 mb-5 text-light position-relative">
          <FontAwesomeIcon
            icon={faArrowsToDot}
            className="mainIcon mt-3 mb-5"
          />
          <h2 className="fw-bold">Meet The Team</h2>
          <p className=" text-light mb-5">
          Hand in hand to meet a common challenge
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 ">
            <div className="item md-mb50">
              <div className="img">
              <Image src="/t1.jpg" width={350} height={350} priority={true} layout="responsive" alt="team" className="imgteam" />
              <div className="social">
              <li className="boxIcon"><FontAwesomeIcon icon={faFacebookF} className="ico me-1" Size="sm" />
                </li>
                <li className="boxIcon"><FontAwesomeIcon icon={faTwitter} className="ico me-1" Size="sm" />
                </li>
                <li className="boxIcon"><FontAwesomeIcon icon={faSquareInstagram} className="ico me-1" Size="sm" /> 
                </li>
            
            </div>
              </div>
              <div className="info text-center">
                <h6 className="mb-5 fw-600"> Anis khemiri</h6>
                <span className="fz-20 ">Frontend</span>

              </div>
          </div>
           
            
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="item md-mb50">
              <div className="img">
              <Image src="/t2.jpg" width={350} height={350} priority={true} layout="responsive" alt="team" className="imgteam" />
              <div className="social">
              <li className="boxIcon"><FontAwesomeIcon icon={faFacebookF} className="ico me-1" size="sm" /> 
                </li>
                <li className="boxIcon"><FontAwesomeIcon icon={faTwitter} className="ico me-1" size="sm" /> 
                </li>
                <li className="boxIcon"><FontAwesomeIcon icon={faSquareInstagram} className="ico me-1" size="sm" /> 
                </li>
            
            </div>
              </div>
              <div className="info text-center">
                <h6 className="mb-5 fw-600"> Nagui</h6>
                <span className="fz-20 ">UX Design</span>

              </div>
          </div>
           
            
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="item md-mb50">
              <div className="img">
              <Image src="/t3.jpg" width={350} height={350} priority={true} layout="responsive" alt="team" className="imgteam" />
              <div className="social">
                <li className="boxIcon"><FontAwesomeIcon icon={faFacebookF} className="ico me-1" /> 
                </li>
                <li className="boxIcon"><FontAwesomeIcon icon={faTwitter} className="ico me-1"  /> 
                </li>
                <li className="boxIcon"><FontAwesomeIcon icon={faSquareInstagram} className="ico me-1" /> 
                </li>
            

            
            </div>
              </div>
              <div className="info text-center">
                <h6 className="mb-5 fw-600"> Oday</h6>
                <span className="fz-20">Backend</span>

              </div>
          </div>
           
            
          </div>
         
      </div>
      </div>
      </div>
   
  );
}
