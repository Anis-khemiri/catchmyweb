import Image from 'next/image'


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
          <div className="row">
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
          </div>
        </div>
      </div>
      <div className="techs pt-5 pb-5 text-center">

    </div>

    </>
  )
}
