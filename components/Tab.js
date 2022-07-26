import React, { useState } from 'react';
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
    <>
      <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
        <li
          className={`${checkActive('all', 'active')} rounded-pill`}
          onClick={() => handleClick('all')}
        >
          ALL
        </li>
        <li
          className={`${checkActive('design', 'active')} rounded-pill`}
          onClick={() => handleClick('design')}
        >
          Design
        </li>

        <li
          className={` ${checkActive('code', 'active')} rounded-pill`}
          onClick={() => handleClick('code')}
        >
          Code
        </li>
        <li
          className={` ${checkActive('photo', 'active')} rounded-pill`}
          onClick={() => handleClick('photo')}
        >
          Photo
        </li>
        <li
          className={` ${checkActive('app', 'active')} rounded-pill`}
          onClick={() => handleClick('app')}
        >
          App
        </li>
      </ul>
      {listpro.map((proj) => {
        return (
          <div className="col-sm-6 col-md-4 col-lg-3" key={proj.id}>
            <div className="box mb-3 bg-white" data-work="Application">
              <Image src={proj.image} width="296px" height="220px" alt="" />
              <h4>{proj.name}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Tabs;
