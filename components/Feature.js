import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faArrowsToDot} from '@fortawesome/free-solid-svg-icons';





export default function Feature() {
  return (
    <>
      <div className="features text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 text-light position-relative">
          <FontAwesomeIcon icon={faArrowsToDot} className="mainIcon mt-3 mb-5" />
            <h2 className="text-light">We are Good at</h2>
            <p className="text-light text-uppercase">
              Some Of These Stuff Under
            </p>
          </div>
          <div className="row">
            <div className="card cardbg col-md-6 col-lg-3 ">
              <div className="imgs mt-3">
                <Image
                  src="/ecommerce.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                E-commerce website
                </h4>
                <p className="card-text pb-4">
                For a better customer experience, we design e-Commerce sites using an approach that puts user needs at the center of our concerns
                </p>
                <Link href="#">
                  <a className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3 ">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs mt-3">
                <Image
                  src="/creation-de-sites-web.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                  Showcase website
                </h4>
                <p className="card-text pb-4">
                present the products and services of your activity 
                in order to provide an online presence and acquire 
                contacts, prospects and customers via the Internet.
                </p>
                <Link href="#" className="card-footer">
                  <a className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs mt-3">
                <Image
                  src="/referencement-naturel.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat ">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                  SEO
                </h4>
                <p className="card-text pb-4">
                Our experts support you to improve the visibility of your site in search engines.
                 In short, it is SEO either organic or sponsored
                </p>
                <Link href="#" className="card-footer">
                  <a className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs mt-3">
                <Image
                  src="/Community-Management.webp"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                 COMMUNITY MANAGEMENT
                </h4>
                <p className="card-text pb-4">
                Entrust us with the writing of your visual and editorial content for your social networks in order to promote your 
                products and services
                </p>
                <Link href="#">
                  <a className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs mt-3 ">
                <Image className='rounded-circle'
                  src="/ERP.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                ERP
                </h4>
                <p className="card-text pb-4">
                We design solutions to centralize your data and manage your business (sales, management, production, accounting, logistics, HR, etc.).
                </p>
                <Link href="#">
                  <a className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs mt-3">
                <Image className="rounded-circle"
                  src="/crm.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
               DIGITAL MARKETING
                </h4>
                <p className="card-text pb-4">
                We go where your audience and your customers are to promote your brands, your services and your goods to consumers. In a word… we generate your sales
                </p>
                <Link href="#">
                  <a className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs mt-3">
                <Image
                  src="/Développement mobile.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat ">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
               MOBILE DEVELOPPEMENT
                </h4>
                <p className="card-text pb-4">
                Dont let your competitors get ahead of you and let us help you build your website, a mobile version or even…
                </p>
                <Link href="#" >
                  <a className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs mt-3">
                <Image
                  src="/mesure.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
              CUSTOM DEVELOPPMENT
                </h4>
                <p className="card-text pb-4">
                A tailor-made website is an essential communication medium. It gives you a personalized identification with a development adapted to your existing infrastructure.

                </p>
                <Link href="#">
                  <a className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3">En savoir plus</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}