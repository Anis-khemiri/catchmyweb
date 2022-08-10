import Link from 'next/link'


export default function StartProject() {
  return (
    <>
      <div className="project text-center pt-5 pb-5 text-light">
        <div className="container">
        <h2>Start Your Project Now</h2>
        <p className="text-white">
          Leave your description and we start the engine. worry,you can
          cancel anytime
        </p>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <Link href="#" ><a className="btn rounded-pill main-btn text-uppercase">
            Start Project
          </a></Link>
        </div>
        </div>
      </div>

    </>
  )
}
