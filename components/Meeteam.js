import Image from 'next/image';
import { FadeIn } from 'react-slide-fade-in';

export default function Meeteam() {
  return (
    <>
      <div className="team text-center pb-5 pt-5">
     <div className="container">
          <h2 className="fw-bold">Meet The Team</h2>
          <p className=" text-black-50 mb-5">
            Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta
            dapibus. Proin eget tortor risus. Donec sollicitudin molestie
            malesuada.
          </p>
 

          <div className="sectionTeam">
            <FadeIn
              from="right"
              positionOffset={200}
              triggerOffset={200}
              delayInMilliseconds={500}
            >
              <div className="bg-white">
                <Image
                  className="imgteam"
                  src="/Nagui khallouli.jpg"
                  alt=""
                  width="300px"
                  height="300"
                />
                <h4 className="p-3 text-light">Nagui khallouli</h4>
                <h6 className="text-black-50 p-3">
                  UIX Design
                </h6>
              </div>
            </FadeIn>
            <FadeIn
              from="top"
              positionOffset={200}
              triggerOffset={400}
              delayInMilliseconds={400}
            >
              <div className="bg-white ">
                <Image
                  className="imgteam"
                  src="/khemiri Anis.jpg"
                  alt=""
                  width="300px"
                  height="300"
                />
                <h4 className="p-3 text-light">Khemiri Anis</h4>
                <h6 className="text-black-50 p-3">
                FRONTEND WEB DEVELOPER
                </h6>
              </div>
            </FadeIn>
            <FadeIn
              from="left"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={600}
            >
              <div className="bg-white">
                <Image
                  className="imgteam"
                  src="/Mostafa.jpg"
                  alt=""
                  width="300px"
                  height="300"
                />
                <h4 className="p-3 text-light">Mostafa</h4>
                <h6 className="text-black-50 p-1">
                  BACKEND WEB DEVELOPER
                </h6>
              </div>
            </FadeIn>
          </div>
          </div>
      </div>
      
    </>
  );
}
