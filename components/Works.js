import Image from 'next/image';
import dataPortfolio from './data/dataPortfolio';

export default function Works() {
  return (
    <div>
      <div className="our-work text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <h2>We Make This</h2>
            <p className="text-black-50 text-uppercase">Prepare To Be Amazed</p>
          </div>
          <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
            <li className="active rounded-pill">All</li>
            <li>Design</li>
            <li>Code</li>
            <li>Photo</li>
            <li>App</li>
          </ul>
          <div className="row">
            {dataPortfolio.projects.map((project) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3" key={project.id}>
                  <div className="box mb-3 bg-white" data-work="Application">
                    <Image
                      src={project.image}
                      width="296px"
                      height="220px"
                      alt=""
                    />
                    <h4>{project.name}</h4>
                  </div>
                </div>
              );
            })}
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
