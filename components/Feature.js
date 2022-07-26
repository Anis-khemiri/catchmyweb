import React from 'react'
import Image from 'next/image';
import Link from "next/link";
export default function Feature() {
  return (
    <>
    <div className="features text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            
            <h2>We are Good at</h2>
            <p className="text-black-50 text-uppercase">Some Of These Stuff Under</p>
          </div>
          <div className="row">
          <div className="card cardbg col-md-6 col-lg-3 ">
            <div className="imgs">
  <Image src="/ecommerce.png" width="80" height="80"  alt="ecommerce"/>
  </div>
  <div className="card-body feat">
    <h4 className="card-title mb-3 mt-3 text-uppercase">Site E-commerce</h4>
    <p className="card-text">Pour une meilleure expérience client, nous concevons des sites e-Commerce selon une approche qui met les besoins des utilisateurs au centre de nos préoccupations.</p>
    <Link href="#"><a className="btn btn-primary">En savoir plus</a></Link>
  </div>
</div>
          <div className="card cardbg col-md-6 col-lg-3">
            <div className="imgs">
  <Image src="/creation-de-sites-web.png" width="80" height="80"  alt="ecommerce"/>
  </div>
  <div className="card-body feat">
    <h4 className="card-title mb-3 mt-3 text-uppercase">Site web vitrine</h4>
    <p className="card-text">Pour une meilleure expérience client, nous concevons des sites e-Commerce selon une approche qui met les besoins des utilisateurs au centre de nos préoccupations.</p>
    <Link href="#"><a className="btn btn-primary">En savoir plus</a></Link>
  </div>
</div>
          <div className="card cardbg col-md-6 col-lg-3">
            <div className="imgs">
  <Image src="/ecommerce.png" width="80" height="80"  alt="ecommerce"/>
  </div>
  <div className="card-body feat">
    <h4 className="card-title mb-3 mt-3 text-uppercase">Site E-commerce</h4>
    <p className="card-text">Pour une meilleure expérience client, nous concevons des sites e-Commerce selon une approche qui met les besoins des utilisateurs au centre de nos préoccupations.</p>
    <Link href="#"><a className="btn btn-primary">En savoir plus</a></Link>
  </div>
</div>
          <div className="card cardbg col-md-6 col-lg-3">
            <div className="imgs">
  <Image src="/ecommerce.png" width="80" height="80"  alt="ecommerce"/>
  </div>
  <div className="card-body feat">
    <h4 className="card-title mb-3 mt-3 text-uppercase">Site E-commerce</h4>
    <p className="card-text">Pour une meilleure expérience client, nous concevons des sites e-Commerce selon une approche qui met les besoins des utilisateurs au centre de nos préoccupations.</p>
    <Link href="#"><a className="btn btn-primary">En savoir plus</a></Link>
  </div>
</div>
           
          </div>
        </div>
        </div>
        </>
  );
}
