import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Feature() {
  return (
    <>
      <div className="features text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <h2>We are Good at</h2>
            <p className="text-black-50 text-uppercase">
              Some Of These Stuff Under
            </p>
          </div>
          <div className="row">
            <div className="card cardbg col-md-6 col-lg-3 ">
              <div className="imgs">
                <Image
                  src="/ecommerce.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                  Site E-commerce
                </h4>
                <p className="card-text">
                  Pour une meilleure expérience client, nous concevons des sites
                  e-Commerce selon une approche qui met les besoins des
                  utilisateurs au centre de nos préoccupations.
                </p>
                <Link href="#">
                  <a className="btn btn-primary buttonPlus">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs">
                <Image
                  src="/creation-de-sites-web.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                  Site web vitrine
                </h4>
                <p className="card-text">
                  Pour une meilleure expérience client, nous concevons des sites
                  e-Commerce selon une approche qui met les besoins des
                  utilisateurs au centre de nos préoccupations.
                </p>
                <Link href="#">
                  <a className="btn btn-primary buttonPlus">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs">
                <Image
                  src="/referencement-naturel.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat ">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                  Référencement web
                </h4>
                <p className="card-text">
                  Nos experts vous accompagnent pour améliorer la visibilité de
                  votre site dans les moteurs de recherche.
                </p>
                <Link href="#">
                  <a className="btn btn-primary buttonPlus">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs">
                <Image
                  src="/Community-Management.webp"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                  Community Management
                </h4>
                <p className="card-text">
                  Confiez-nous la rédaction de vos contenus visuels et
                  rédactionnels pour vos réseaux sociau
                </p>
                <Link href="#">
                  <a className="btn btn-primary buttonPlus">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs">
                <Image
                  src="/erp.jpg"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                ERP
                </h4>
                <p className="card-text">
                Nous concevons des solutions pour centraliser vos données et gérer votre entreprise (ventes, management, production, comptabilité, logistique, RH…).
                </p>
                <Link href="#">
                  <a className="btn btn-primary buttonPlus">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs">
                <Image
                  src="/crm.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                 CRM
                </h4>
                <p className="card-text">
                Un CRM (Customer Relation Management ou Logiciel de Gestion de la Relation Client) est un outil qui aide les entreprises à mettre en place
                </p>
                <Link href="#">
                  <a className="btn btn-primary justify-content-around buttonPlus">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs">
                <Image
                  src="/Développement mobile.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat ">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                Développement mobile
                </h4>
                <p className="card-text">
                Ne vous laissez pas devancés par vos compétiteurs et laissez nous vous aider afin de bâtir votre site web une version mobile ou encore…
                </p>
                <Link href="#" >
                  <a className="btn btn-primary buttonPlus">En savoir plus</a>
                </Link>
              </div>
            </div>
            <div className="card cardbg col-md-6 col-lg-3">
              <div className="imgs">
                <Image
                  src="/mesure.png"
                  width="80"
                  height="80"
                  alt="ecommerce"
                />
              </div>
              <div className="card-body feat">
                <h4 className="card-title mb-3 mt-3 text-uppercase">
                Développement sur mesure
                </h4>
                <p className="card-text">
                Un site web sur mesure est un support de communication incontournable. Il vous donne une identification personnalisée avec un développement adapté à votre infrastructure existante.
                </p>
                <Link href="#">
                  <a className="btn btn-primary buttonPlus">En savoir plus</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
