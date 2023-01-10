

import Head from 'next/head';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { ReactComponent as CompanyIcon } from '../public/whatsapp.png';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import { useEffect } from 'react';
import Background from '../components/Background';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <>
    <Head>
    <title>catchmyweb</title>
  </Head>
      <Layout>
        <Background />
        <Component {...pageProps} />
        <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="21697442612" />
      </Layout>
      </>
  );
}

export default MyApp;
