import Image from 'next/image';
import { FadeIn } from 'react-slide-fade-in';

export default function Meeteam() {
  return (
    <>
      <div className="team text-center pb-5 pt-5">
        <div className="container pb-5 pt-5">
          <h2 className="fw-bold">Meet The Team</h2>
          <p className="text-black-50 mb-5">
            Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta
            dapibus. Proin eget tortor risus. Donec sollicitudin molestie
            malesuada.
          </p>
          {/*  <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="box bg-white">
              <Image className="img-fluid" src="/project1.png" alt="" width= "200px" height= "200" />
                <h4 className="p-3 text-light">Luke Skywalker</h4>
                <p className="text-black-50 p-3">
                  “I dont understand how we got by those troops. I thought we
                  were dead.“
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="box bg-white">
              <Image className="img-fluid" src="/project1.png" alt="" width= "200px" height= "200" />
                <h4 className="p-3 text-light">Luke Skywalker</h4>
                <p className="text-black-50 p-3">
                  “I dont understand how we got by those troops. I thought we
                  were dead.“
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box bg-white">
              <Image className="img-fluid" src="/project1.png" alt="" width= "200px" height= "200" />
                <h4 className="p-3 text-light">Luke Skywalker</h4>
                <p className="text-black-50 p-3">
                  “I dont understand how we got by those troops. I thought we
                  were dead.“
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box bg-white">
              <Image className="img-fluid" src="/project1.png" alt="" width= "200px" height= "200" />
                <h4 className="p-3 text-light">Luke Skywalker</h4>
                <p className="text-black-50 p-3">
                  “I dont understand how we got by those troops. I thought we
                  were dead.“
                 </p>
              </div>
            </div>
          </div> */}

          <div className="d-flex flex-column center sectionTeam">
            <FadeIn
              from="right"
              positionOffset={800}
              triggerOffset={200}
              delayInMilliseconds={600}
            >
              <div className="box bg-white">
                <Image
                  className="img-fluid imgteam"
                  src="/Nagui khallouli.jpg"
                  alt=""
                  width="200px"
                  height="200"
                />
                <h4 className="p-3 text-light">Nagui khallouli</h4>
                <h4 className="text-black-50 p-3">
                  UIX Design
                </h4>
              </div>
            </FadeIn>
            <FadeIn
              from="top"
              positionOffset={800}
              triggerOffset={400}
              delayInMilliseconds={400}
            >
              <div className="box bg-white ">
                <Image
                  className="img-fluid imgteam"
                  src="/khemiri Anis.jpg"
                  alt=""
                  width="200px"
                  height="200"
                />
                <h4 className="p-3 text-light">Khemiri Anis</h4>
                <h4 className="text-black-50 p-3">
                FRONTEND WEB DEVELOPER
                </h4>
              </div>
            </FadeIn>
            <FadeIn
              from="left"
              positionOffset={800}
              triggerOffset={-200}
              delayInMilliseconds={800}
            >
              <div className="box bg-white ">
                <Image
                  className="img-fluid imgteam"
                  src="/Mostafa.jpg"
                  alt=""
                  width="200px"
                  height="200"
                />
                <h4 className="p-3 text-light">Mostafa</h4>
                <h4 className="text-black-50 p-3">
                  BACKEND WEB DEVELOPER
                </h4>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="techs pt-5 pb-5 text-center"></div>
    </>
  );
}
