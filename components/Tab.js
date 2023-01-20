
import React, { Fragment, useState } from 'react';

import dataPortfolio from './data/dataPortfolio';
import Image from 'next/image';
const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState('all');
  const handleClick = (e) => {
    setActiveIndex(e);
  };
  const listpro = dataPortfolio.projects.filter((project) =>
    project.description.includes(activeIndex)
  );

  const checkActive = (e, className) => (activeIndex === e ? className : '');

  return (
    <Fragment>
      <ul className="work-list rounded-pill list-unstyled d-flex justify-content-center mt-5 mb-5">
        <li
          className={`${checkActive('all', 'active')} rounded-pill`}
          onClick={() => handleClick('all')}
        >
          ALL
        </li>
        <li
          className={`${checkActive('ecommerce', 'active')} rounded-pill`}
          onClick={() => handleClick('ecommerce')}
        >
          ECOMMERCE
        </li>

        <li
          className={` ${checkActive('showcase', 'active')} rounded-pill`}
          onClick={() => handleClick('showcase')}
        >
         SHOWCASE
        </li>
        <li
          className={` ${checkActive('portfolio', 'active')} rounded-pill`}
          onClick={() => handleClick('portfolio')}
        >
          PORTFOLIO
        </li>
        <li
          className={` ${checkActive('app', 'active')} rounded-pill`}
          onClick={() => handleClick('app')}
        >
          APP
        </li>
      </ul>
      
      {listpro.map((proj) => {
        return (

          <div className="work-box col-sm-6 col-md-4 col-lg-3 g-3 position-relative" key={proj.id} >
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
            <div className="box mb-3 bg-white" data-work="Preview" >
            
              <Image className="img-fluid" src={proj.image} width={296} height={220} priority={true} alt="" />
              <h4>{proj.name}</h4>
         
            </div>
            </a>
          </div>
      
      
        );
      })}
    
    </Fragment>
  );
};

export default Tabs;
